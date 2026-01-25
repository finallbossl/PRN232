import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from '@goride/shared';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    // TODO: Implement registration logic
    return {
      message: 'Registration endpoint - to be implemented',
      data: registerDto,
    };
  }

  async login(loginDto: LoginDto) {
    // TODO: Implement login logic
    return {
      message: 'Login endpoint - to be implemented',
      data: loginDto,
    };
  }
}
