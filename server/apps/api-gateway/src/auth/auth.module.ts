import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule,
    // Microservices Clients - gRPC
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            package: 'auth',
            protoPath: join(__dirname, '../../../proto/auth.proto'),
            url: `${configService.get<string>('AUTH_SERVICE_HOST', 'localhost')}:${configService.get<number>('AUTH_SERVICE_PORT', 50051)}`,
          },
        }),
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
