import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MotorbikeModule } from './motorbike/motorbike.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MotorbikeModule,
    ],
})
export class AppModule { }
