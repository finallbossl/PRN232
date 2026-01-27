import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { AuthModule } from '../auth/auth.module';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule,
        AuthModule,
        ClientsModule.registerAsync([
            {
                name: 'RENTAL_PACKAGE',
                imports: [ConfigModule],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.GRPC,
                    options: {
                        package: 'rental',
                        protoPath: join(process.cwd(), 'proto/rental.proto'),
                        url: `${configService.get<string>('RENTAL_SERVICE_HOST', '127.0.0.1')}:${configService.get<string>('RENTAL_SERVICE_PORT', '50054')}`,
                    },
                }),
                inject: [ConfigService],
            },
        ]),
    ],
    controllers: [RentalController],
    providers: [RentalService],
    exports: [RentalService],
})
export class RentalModule { }
