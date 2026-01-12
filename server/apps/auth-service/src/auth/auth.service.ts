import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@goride/prisma';
import * as bcrypt from 'bcrypt';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  ValidateUserResponse,
  GetProfileResponse,
} from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    // TODO: Implement registration logic
    // 1. Check if user exists
    // 2. Hash password
    // 3. Create user
    // 4. Return user (without password)
    return {
      statusCode: 201,
      message: 'Registration endpoint - TODO',
    };
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    // TODO: Implement login logic
    // 1. Validate user credentials
    // 2. Generate JWT token
    // 3. Return token and user info
    return {
      statusCode: 200,
      message: 'Login endpoint - TODO',
      access_token: 'jwt_token_here',
    };
  }

  async validateUser(email: string, password: string): Promise<ValidateUserResponse> {
    // TODO: Implement user validation
    // 1. Find user by email
    // 2. Compare password
    // 3. Return user or null
    return {
      valid: false,
    };
  }

  async getProfile(userId: string): Promise<GetProfileResponse> {
    // TODO: Implement get profile logic
    return {
      statusCode: 200,
    };
  }
}
