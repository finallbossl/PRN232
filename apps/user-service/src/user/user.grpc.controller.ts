import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserGrpcController {
    constructor(private readonly userService: UserService) { }

    /**
     * gRPC method to get user by ID
     */
    @GrpcMethod('UserService', 'GetUserById')
    async GetUserById(data: { id: string }) {
        return this.userService.findById(data.id);
    }

    /**
     * gRPC method to update user
     */
    @GrpcMethod('UserService', 'UpdateUser')
    async UpdateUser(data: { id: string, name?: string, phone?: string, address?: string }) {
        return this.userService.update(data.id, data);
    }

    /**
     * gRPC method to delete user
     */
    @GrpcMethod('UserService', 'DeleteUser')
    async DeleteUser(data: { id: string }) {
        return this.userService.delete(data.id);
    }

    /**
     * gRPC method to list users
     */
    @GrpcMethod('UserService', 'ListUsers')
    async ListUsers(data: { page: number, limit: number, search?: string }) {
        return this.userService.list(data.page, data.limit, data.search);
    }
}
