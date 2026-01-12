import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  ValidateUserRequest,
  ValidateUserResponse,
  GetProfileRequest,
  GetProfileResponse,
} from './interfaces/auth.interface';

@Controller()
export class AuthGrpcController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'Register')
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    return this.authService.register(data);
  }

  @GrpcMethod('AuthService', 'Login')
  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.authService.login(data);
  }

  @GrpcMethod('AuthService', 'ValidateUser')
  async validateUser(data: ValidateUserRequest): Promise<ValidateUserResponse> {
    return this.authService.validateUser(data.email, data.password);
  }

  @GrpcMethod('AuthService', 'GetProfile')
  async getProfile(data: GetProfileRequest): Promise<GetProfileResponse> {
    return this.authService.getProfile(data.userId);
  }
}
