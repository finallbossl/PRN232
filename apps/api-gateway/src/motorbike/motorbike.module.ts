import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MotorbikeController } from './motorbike.controller';
import { MotorbikeService } from './motorbike.service';
import { AuthModule } from '../auth/auth.module';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule,
        AuthModule,
        ClientsModule.registerAsync([
            {
                name: 'MOTORBIKE_PACKAGE',
                imports: [ConfigModule],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.GRPC,
                    options: {
                        package: 'motorbike',
                        protoPath: join(process.cwd(), 'proto/motorbike.proto'),
                        url: `${configService.get<string>('MOTORBIKE_SERVICE_HOST', 'localhost')}:${configService.get<string>('MOTORBIKE_SERVICE_PORT', '50053')}`,
                    },
                }),
                inject: [ConfigService],
            },
        ]),
    ],
    controllers: [MotorbikeController],
    providers: [MotorbikeService],
    exports: [MotorbikeService],
})
export class MotorbikeModule { }
