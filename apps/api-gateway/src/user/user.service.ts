import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

/**
 * Interface for User gRPC Service
 */
interface UserGrpcService {
    GetUserById(data: { id: string }): Observable<{ user: any }>;
    UpdateUser(data: { id: string, name?: string, phone?: string, address?: string }): Observable<{ user: any }>;
    DeleteUser(data: { id: string }): Observable<{ success: boolean, message: string }>;
    ListUsers(data: { page: number, limit: number, search?: string }): Observable<{ users: any[], total: number, page: number, limit: number }>;
}

@Injectable()
export class UserService implements OnModuleInit {
    private userGrpcService: UserGrpcService;

    constructor(
        @Inject('USER_PACKAGE') private client: ClientGrpc,
    ) { }

    onModuleInit() {
        this.userGrpcService = this.client.getService<UserGrpcService>('UserService');
    }

    /**
     * Get user by ID
     */
    async findById(id: string): Promise<{ user: any }> {
        return firstValueFrom(this.userGrpcService.GetUserById({ id }));
    }

    /**
     * Update user info
     */
    async update(id: string, data: any): Promise<{ user: any }> {
        return firstValueFrom(this.userGrpcService.UpdateUser({ id, ...data }));
    }

    /**
     * Delete user
     */
    async delete(id: string): Promise<{ success: boolean; message: string }> {
        return firstValueFrom(this.userGrpcService.DeleteUser({ id }));
    }

    /**
     * List users
     */
    async list(page: number, limit: number, search?: string): Promise<{ users: any[]; total: number; page: number; limit: number }> {
        return firstValueFrom(this.userGrpcService.ListUsers({ page, limit, search }));
    }
}
