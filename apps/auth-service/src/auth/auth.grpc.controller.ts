import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly authService: AuthService) {}

  // TODO: Implement gRPC handlers
  // @GrpcMethod('AuthService', 'Register')
  // async register(data: RegisterDto) {
  //   return this.authService.register(data);
  // }
}
