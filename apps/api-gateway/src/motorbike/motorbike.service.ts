import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateMotorbikeDto, UpdateMotorbikeDto, MotorbikeFilterDto } from '@goride/shared';

interface MotorbikeGrpcService {
    CreateMotorbike(data: CreateMotorbikeDto): Observable<{ motorbike: any }>;
    UpdateMotorbike(data: UpdateMotorbikeDto & { id: string }): Observable<{ motorbike: any }>;
    DeleteMotorbike(data: { id: string }): Observable<{ success: boolean; message: string }>;
    GetMotorbikeById(data: { id: string }): Observable<{ motorbike: any }>;
    ListMotorbikes(data: MotorbikeFilterDto): Observable<{ motorbikes: any[]; total: number; page: number; limit: number }>;
}

@Injectable()
export class MotorbikeService implements OnModuleInit {
    private motorbikeGrpcService: MotorbikeGrpcService;

    constructor(
        @Inject('MOTORBIKE_PACKAGE') private client: ClientGrpc,
    ) { }

    onModuleInit() {
        this.motorbikeGrpcService = this.client.getService<MotorbikeGrpcService>('MotorbikeService');
    }

    async create(data: CreateMotorbikeDto) {
        return firstValueFrom(this.motorbikeGrpcService.CreateMotorbike(data));
    }

    async update(id: string, data: UpdateMotorbikeDto) {
        return firstValueFrom(this.motorbikeGrpcService.UpdateMotorbike({ id, ...data }));
    }

    async delete(id: string) {
        return firstValueFrom(this.motorbikeGrpcService.DeleteMotorbike({ id }));
    }

    async findById(id: string) {
        return firstValueFrom(this.motorbikeGrpcService.GetMotorbikeById({ id }));
    }

    async findAll(filters: MotorbikeFilterDto) {
        return firstValueFrom(this.motorbikeGrpcService.ListMotorbikes(filters));
    }
}
