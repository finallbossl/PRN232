import { Module } from '@nestjs/common';
import { MotorbikeService } from './motorbike.service';
import { MotorbikeGrpcController } from './motorbike.grpc.controller';

@Module({
    controllers: [MotorbikeGrpcController],
    providers: [MotorbikeService],
    exports: [MotorbikeService],
})
export class MotorbikeModule { }
