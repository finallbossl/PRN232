import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClient, MotorbikeType, MotorbikeStatus } from '@prisma/client';

@Injectable()
export class MotorbikeService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    /**
     * Create a new motorbike
     */
    async create(data: any) {
        const existing = await this.prisma.motorbike.findUnique({
            where: { licensePlate: data.licensePlate },
        });

        if (existing) {
            throw new ConflictException('Biển số xe đã tồn tại');
        }

        const motorbike = await this.prisma.motorbike.create({
            data: {
                name: data.name,
                type: data.type as MotorbikeType,
                pricePerDay: data.pricePerDay,
                description: data.description,
                licensePlate: data.licensePlate,
                year: data.year,
                images: data.images || [],
                fuelCapacity: data.fuelCapacity,
                engineSize: data.engineSize,
                status: MotorbikeStatus.AVAILABLE,
            },
        });

        return { motorbike: this.formatMotorbike(motorbike) };
    }

    /**
     * Update motorbike info
     */
    async update(id: string, data: any) {
        const existing = await this.prisma.motorbike.findUnique({
            where: { id },
        });

        if (!existing) {
            throw new NotFoundException(`Motorbike with ID ${id} not found`);
        }

        const updated = await this.prisma.motorbike.update({
            where: { id },
            data: {
                name: data.name,
                type: data.type as MotorbikeType,
                pricePerDay: data.pricePerDay,
                description: data.description,
                status: data.status as MotorbikeStatus,
                images: data.images,
                fuelCapacity: data.fuelCapacity,
                engineSize: data.engineSize,
            },
        });

        return { motorbike: this.formatMotorbike(updated) };
    }

    /**
     * Delete motorbike
     */
    async delete(id: string) {
        const existing = await this.prisma.motorbike.findUnique({
            where: { id },
        });

        if (!existing) {
            throw new NotFoundException(`Motorbike with ID ${id} not found`);
        }

        await this.prisma.motorbike.delete({
            where: { id },
        });

        return { success: true, message: 'Motorbike deleted successfully' };
    }

    /**
     * Get motorbike by ID
     */
    async findById(id: string) {
        const motorbike = await this.prisma.motorbike.findUnique({
            where: { id },
        });

        if (!motorbike) {
            throw new NotFoundException(`Motorbike with ID ${id} not found`);
        }

        return { motorbike: this.formatMotorbike(motorbike) };
    }

    /**
     * List motorbikes with filters
     */
    async list(filters: any) {
        const { type, minPrice, maxPrice, status, search, page = 1, limit = 10 } = filters;
        const skip = (page - 1) * limit;

        const where: any = {};

        if (type) where.type = type;
        if (status) where.status = status;
        if (minPrice !== undefined || maxPrice !== undefined) {
            where.pricePerDay = {};
            if (minPrice !== undefined) where.pricePerDay.gte = minPrice;
            if (maxPrice !== undefined) where.pricePerDay.lte = maxPrice;
        }
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { licensePlate: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }

        const [motorbikes, total] = await Promise.all([
            this.prisma.motorbike.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.motorbike.count({ where }),
        ]);

        return {
            motorbikes: motorbikes.map(m => this.formatMotorbike(m)),
            total,
            page,
            limit,
        };
    }

    /**
     * Format motorbike data for response
     */
    private formatMotorbike(m: any) {
        return {
            ...m,
            pricePerDay: Number(m.pricePerDay),
            createdAt: m.createdAt.toISOString(),
            updatedAt: m.updatedAt.toISOString(),
        };
    }

    /**
     * Clean up Prisma on destroy
     */
    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
}
