import { Module } from '@nestjs/common';
import { AuthGrpcController } from './auth.grpc.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthGrpcController],
  providers: [AuthService],
})
export class AuthModule {}
