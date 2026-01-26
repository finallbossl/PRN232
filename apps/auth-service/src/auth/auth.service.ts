import { Injectable, ConflictException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RegisterDto, LoginDto, AuthResponse, JwtPayload } from '@goride/shared';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor(private jwtService: JwtService) {
    this.prisma = new PrismaClient();
  }

  /**
   * Register a new user
   */
  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const { email, password, name, phone, address } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email đã được sử dụng');
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
      // Create new user
      const user = await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          phone: phone || null,
          address: address || null,
          role: UserRole.CUSTOMER,
        },
        select: {
          id: true,
          email: true,
          name: true,
          phone: true,
          address: true,
          role: true,
        },
      });

      // Generate JWT tokens
      const tokens = await this.generateTokens(user.id, user.email, user.role);

      return {
        success: true,
        message: 'Đăng ký tài khoản thành công',
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email đã được sử dụng');
      }
      throw error;
    }
  }

  /**
   * Login user
   */
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }

    // Generate JWT tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role);

    return {
      success: true,
      message: 'Đăng nhập thành công',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  /**
   * Validate user by ID
   */
  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Người dùng không tồn tại');
    }

    return {
      success: true,
      user,
      message: 'Lấy thông tin người dùng thành công',
    };
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    try {
      // Verify refresh token
      const payload = await this.jwtService.verifyAsync<JwtPayload>(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      });

      // Generate new access token
      const accessToken = await this.jwtService.signAsync(
        {
          sub: payload.sub,
          email: payload.email,
          role: payload.role,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES_IN || '7d',
        }
      );

      return { accessToken };
    } catch (error) {
      throw new UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn');
    }
  }

  /**
   * Generate JWT tokens
   */
  private async generateTokens(
    userId: string,
    email: string,
    role: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: JwtPayload = {
      sub: userId,
      email,
      role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
