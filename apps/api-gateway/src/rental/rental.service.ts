import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

interface RentalGrpcService {
    CreateRental(data: any): Observable<{ rental: any }>;
    GetRentalById(data: { id: string }): Observable<{ rental: any }>;
    UpdateRentalStatus(data: { id: string, status: string }): Observable<{ rental: any }>;
    ListUserRentals(data: { userId: string, page: number, limit: number }): Observable<{ rentals: any[], total: number, page: number, limit: number }>;
    ListAllRentals(data: { page: number, limit: number, status?: string }): Observable<{ rentals: any[], total: number, page: number, limit: number }>;
}

@Injectable()
export class RentalService implements OnModuleInit {
    private rentalGrpcService: RentalGrpcService;

    constructor(
        @Inject('RENTAL_PACKAGE') private client: ClientGrpc,
    ) { }

    onModuleInit() {
        this.rentalGrpcService = this.client.getService<RentalGrpcService>('RentalService');
    }

    async create(data: any) {
        try {
            return await firstValueFrom(this.rentalGrpcService.CreateRental(data));
        } catch (error) {
            console.error('[Gateway RentalService] Grpc Error:', error);
            throw error;
        }
    }

    async findById(id: string) {
        return firstValueFrom(this.rentalGrpcService.GetRentalById({ id }));
    }

    async updateStatus(id: string, status: string) {
        return firstValueFrom(this.rentalGrpcService.UpdateRentalStatus({ id, status }));
    }

    async listByUser(userId: string, page: number, limit: number) {
        return firstValueFrom(this.rentalGrpcService.ListUserRentals({ userId, page, limit }));
    }

    async listAll(page: number, limit: number, status?: string) {
        return firstValueFrom(this.rentalGrpcService.ListAllRentals({ page, limit, status }));
    }
}
