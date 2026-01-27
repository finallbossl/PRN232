import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RentalService } from './rental.service';

@Controller()
export class RentalGrpcController {
    constructor(private readonly rentalService: RentalService) { }

    @GrpcMethod('RentalService', 'CreateRental')
    async CreateRental(data: any) {
        return this.rentalService.create(data);
    }

    @GrpcMethod('RentalService', 'GetRentalById')
    async GetRentalById(data: { id: string }) {
        return this.rentalService.findById(data.id);
    }

    @GrpcMethod('RentalService', 'UpdateRentalStatus')
    async UpdateRentalStatus(data: { id: string, status: string }) {
        return this.rentalService.updateStatus(data.id, data.status);
    }

    @GrpcMethod('RentalService', 'ListUserRentals')
    async ListUserRentals(data: { userId: string, page: number, limit: number }) {
        return this.rentalService.listByUser(data.userId, data.page, data.limit);
    }

    @GrpcMethod('RentalService', 'ListAllRentals')
    async ListAllRentals(data: { page: number, limit: number, status?: string }) {
        return this.rentalService.listAll(data.page, data.limit, data.status);
    }
}
