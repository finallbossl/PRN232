import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, AuthResponse } from '@goride/shared';

@Controller()
export class AuthGrpcController {
  constructor(private readonly authService: AuthService) { }

  @GrpcMethod('AuthService', 'Register')
  async Register(data: RegisterDto): Promise<AuthResponse> {
    return this.authService.register(data);
  }

  @GrpcMethod('AuthService', 'Login')
  async Login(data: LoginDto): Promise<AuthResponse> {
    return this.authService.login(data);
  }

  @GrpcMethod('AuthService', 'ValidateUser')
  async ValidateUser(data: { userId: string }) {
    return this.authService.validateUser(data.userId);
  }

  @GrpcMethod('AuthService', 'RefreshToken')
  async RefreshToken(data: { refreshToken: string }): Promise<{ accessToken: string }> {
    return this.authService.refreshToken(data.refreshToken);
  }
}
