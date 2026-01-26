import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient, UserRole } from '@prisma/client';

@Injectable()
export class UserService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    /**
     * Get user by ID
     */
    async findById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                address: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return { user };
    }

    /**
     * Update user info
     */
    async update(id: string, data: any) {
        // Check if user exists
        await this.findById(id);

        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: {
                name: data.name,
                phone: data.phone,
                address: data.address,
            },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                address: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return { user: updatedUser };
    }

    /**
     * Delete user
     */
    async delete(id: string) {
        await this.findById(id);

        await this.prisma.user.delete({
            where: { id },
        });

        return { success: true, message: 'User deleted successfully' };
    }

    /**
     * List all users (with pagination and search)
     */
    async list(page: number, limit: number, search?: string) {
        const skip = (page - 1) * limit;

        const where = search ? {
            OR: [
                { name: { contains: search, mode: 'insensitive' as any } },
                { email: { contains: search, mode: 'insensitive' as any } },
            ],
        } : {};

        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phone: true,
                    address: true,
                    role: true,
                    createdAt: true,
                    updatedAt: true,
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({ where }),
        ]);

        console.log(`[UserService] list found ${users.length} users (total: ${total})`);

        return {
            users: users.map(user => ({
                ...user,
                createdAt: user.createdAt.toISOString(),
                updatedAt: user.updatedAt.toISOString(),
            })),
            total,
            page,
            limit,
        };
    }

    /**
     * Clean up Prisma on destroy
     */
    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
}
