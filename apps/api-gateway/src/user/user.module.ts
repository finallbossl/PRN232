import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule,
        AuthModule, // To use JwtAuthGuard
        ClientsModule.registerAsync([
            {
                name: 'USER_PACKAGE',
                imports: [ConfigModule],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.GRPC,
                    options: {
                        package: 'user',
                        protoPath: join(process.cwd(), 'proto/user.proto'),
                        url: `${configService.get<string>('USER_SERVICE_HOST', 'localhost')}:${configService.get<string>('USER_SERVICE_PORT', '50052')}`,
                    },
                }),
                inject: [ConfigService],
            },
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule { }
