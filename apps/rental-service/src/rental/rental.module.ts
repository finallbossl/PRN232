import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalGrpcController } from './rental.grpc.controller';

@Module({
    controllers: [RentalGrpcController],
    providers: [RentalService],
    exports: [RentalService],
})
export class RentalModule { }
