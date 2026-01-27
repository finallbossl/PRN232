import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RentalModule } from './rental/rental.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        RentalModule,
    ],
})
export class AppModule { }
