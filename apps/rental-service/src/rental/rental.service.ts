import { Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices'; // Dùng RpcException cho gRPC
import { PrismaClient, RentalStatus, MotorbikeStatus } from '@prisma/client';

@Injectable()
export class RentalService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: any) {
        const { userId, motorbikeId, startDate, endDate, pickupLocation, returnLocation, notes } = data;

        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new RpcException('Người dùng không tồn tại');

        const motorbike = await this.prisma.motorbike.findUnique({ where: { id: motorbikeId } });
        if (!motorbike) throw new RpcException('Xe không tồn tại');

        if (motorbike.status === MotorbikeStatus.RENTED) {
            throw new RpcException('Xe đã được thuê');
        }
        if (motorbike.status === MotorbikeStatus.MAINTENANCE || motorbike.status === MotorbikeStatus.UNAVAILABLE) {
            throw new RpcException('Xe hiện đang bảo trì hoặc không khả dụng để thuê');
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        const overlappingRental = await this.prisma.rental.findFirst({
            where: {
                motorbikeId,
                status: { in: [RentalStatus.CONFIRMED, RentalStatus.ONGOING] },
                AND: [
                    { startDate: { lt: end } },
                    { endDate: { gt: start } }
                ]
            }
        });

        if (overlappingRental) {
            throw new RpcException('Xe đã có lịch đặt trước trong khoảng thời gian này');
        }

        const diffTime = Math.abs(end.getTime() - start.getTime());
        const numberOfDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
        const totalPrice = Number(motorbike.pricePerDay) * numberOfDays;

        const rental = await this.prisma.rental.create({
            data: {
                userId,
                motorbikeId,
                startDate: start,
                endDate: end,
                pickupLocation,
                returnLocation,
                status: RentalStatus.PENDING,
                totalPrice,
                numberOfDays,
                notes,
            },
            include: {
                motorbike: true,
            },
        });

        return { rental: this.formatRental(rental) };
    }

    async findById(id: string) {
        const rental = await this.prisma.rental.findUnique({
            where: { id },
            include: { motorbike: true },
        });
        if (!rental) throw new RpcException('Không tìm thấy đơn thuê xe');
        return { rental: this.formatRental(rental) };
    }

    async updateStatus(id: string, status: string) {
        const existing = await this.prisma.rental.findUnique({ where: { id } });
        if (!existing) throw new RpcException('Không tìm thấy đơn thuê xe');

        const updated = await this.prisma.rental.update({
            where: { id },
            data: { status: status as RentalStatus },
            include: { motorbike: true },
        });

        if (status === RentalStatus.CONFIRMED || status === RentalStatus.ONGOING) {
            await this.prisma.motorbike.update({
                where: { id: existing.motorbikeId },
                data: { status: MotorbikeStatus.RENTED },
            });
        }
        if (status === RentalStatus.COMPLETED || status === RentalStatus.CANCELLED) {
            await this.prisma.motorbike.update({
                where: { id: existing.motorbikeId },
                data: { status: MotorbikeStatus.AVAILABLE },
            });
        }
        return { rental: this.formatRental(updated) };
    }

    async listByUser(userId: string, page: number, limit: number) {
        const skip = (page - 1) * limit;
        const [rentals, total] = await Promise.all([
            this.prisma.rental.findMany({
                where: { userId },
                skip,
                take: limit,
                include: { motorbike: true },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.rental.count({ where: { userId } }),
        ]);
        return { rentals: rentals.map(r => this.formatRental(r)), total, page, limit };
    }

    async listAll(page: number, limit: number, status?: string) {
        const skip = (page - 1) * limit;
        const where: any = {};
        if (status) where.status = status as RentalStatus;

        const [rentals, total] = await Promise.all([
            this.prisma.rental.findMany({
                where,
                skip,
                take: limit,
                include: { motorbike: true },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.rental.count({ where }),
        ]);
        return { rentals: rentals.map(r => this.formatRental(r)), total, page, limit };
    }

    private formatRental(r: any) {
        return {
            ...r,
            totalPrice: Number(r.totalPrice),
            startDate: r.startDate.toISOString(),
            endDate: r.endDate.toISOString(),
            createdAt: r.createdAt.toISOString(),
            updatedAt: r.updatedAt.toISOString(),
            motorbike: r.motorbike ? {
                id: r.motorbike.id,
                name: r.motorbike.name,
                licensePlate: r.motorbike.licensePlate,
            } : undefined,
        };
    }

    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
}
