import { Controller, Post, Body, Get, Param, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { Public } from '@goride/common';
import { LoginDto, RegisterDto } from '@goride/shared';

// gRPC Interface
interface AuthServiceClient {
  Register(data: any): any;
  Login(data: any): any;
  ValidateUser(data: any): any;
  GetProfile(data: any): any;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController implements OnModuleInit {
  private authService: AuthServiceClient;

  constructor(
    @Inject('AUTH_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthServiceClient>('AuthService');
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Đăng ký tài khoản mới' })
  async register(@Body() registerDto: RegisterDto) {
    try {
      const result = await firstValueFrom(
        this.authService.Register(registerDto),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập' })
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await firstValueFrom(
        this.authService.Login(loginDto),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Get('profile/:userId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lấy thông tin profile' })
  async getProfile(@Param('userId') userId: string) {
    try {
      const result = await firstValueFrom(
        this.authService.GetProfile({ userId }),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
