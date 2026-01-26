import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MotorbikeService } from './motorbike.service';

@Controller()
export class MotorbikeGrpcController {
    constructor(private readonly motorbikeService: MotorbikeService) { }

    @GrpcMethod('MotorbikeService', 'CreateMotorbike')
    async CreateMotorbike(data: any) {
        return this.motorbikeService.create(data);
    }

    @GrpcMethod('MotorbikeService', 'UpdateMotorbike')
    async UpdateMotorbike(data: any) {
        return this.motorbikeService.update(data.id, data);
    }

    @GrpcMethod('MotorbikeService', 'DeleteMotorbike')
    async DeleteMotorbike(data: { id: string }) {
        return this.motorbikeService.delete(data.id);
    }

    @GrpcMethod('MotorbikeService', 'GetMotorbikeById')
    async GetMotorbikeById(data: { id: string }) {
        return this.motorbikeService.findById(data.id);
    }

    @GrpcMethod('MotorbikeService', 'ListMotorbikes')
    async ListMotorbikes(data: any) {
        return this.motorbikeService.list(data);
    }
}
