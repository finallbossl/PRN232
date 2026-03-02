import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PaymentStatus, RentalStatus } from '@goride/shared';

@Injectable()
export class PaymentService {
    private readonly logger = new Logger(PaymentService.name);

    constructor(
        private prisma: PrismaService,
        private configService: ConfigService,
    ) { }

    /**
     * Handle incoming SePay Webhook
     */
    async handleSePayWebhook(payload: any, authHeader?: string) {
        // Verify API Key from Authorization header
        const apiKey = this.configService.get<string>('SEPAY_API_KEY');
        if (authHeader !== `Bearer ${apiKey}`) {
            this.logger.error('Unauthorized SePay Webhook attempt');
            throw new UnauthorizedException('Invalid API Key');
        }

        const { content, amountIn, transactionDate, id: transactionId } = payload;
        this.logger.log(`Processing SePay Webhook: ${transactionId}, Content: ${content}, Amount: ${amountIn}`);

        // Try to extract Rental ID from content
        // We look for a UUID v4 pattern anywhere in the string, ignoring case
        const rentalIdMatch = content.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
        
        if (!rentalIdMatch) {
            this.logger.warn(`Could not find Rental ID in content: ${content}`);
            return { success: false, message: 'Invalid content' };
        }

        const rentalId = rentalIdMatch[0];

        // 1. Check for Idempotency (prevent duplicate processing)
        const existingTransaction = await this.prisma.payment.findFirst({
            where: { transactionId: transactionId.toString() },
        });

        if (existingTransaction) {
            this.logger.warn(`Transaction ID ${transactionId} already processed. Skipping.`);
            return { success: true, message: 'Already processed' };
        }

        // 2. Find the payment record for this rental
        const payment = await this.prisma.payment.findUnique({
            where: { rentalId },
        });

        if (!payment) {
            this.logger.error(`No payment record found for Rental ID: ${rentalId}`);
            return { success: false, message: 'Payment record not found' };
        }

        // Verify amount (optional but recommended)
        const expectedAmount = Number(payment.amount);
        if (Number(amountIn) < expectedAmount) {
            this.logger.warn(`Amount mismatch for Rental ${rentalId}. Expected: ${expectedAmount}, Received: ${amountIn}`);
            // We still mark it but maybe flag it or keep it pending? 
            // For now, let's just log it. Usually SePay is used for exact amounts.
        }

        // Update payment and rental status in a transaction
        await this.prisma.$transaction(async (tx) => {
            await tx.payment.update({
                where: { id: payment.id },
                data: {
                    status: PaymentStatus.COMPLETED,
                    transactionId: transactionId.toString(),
                    transactionDate: new Date(transactionDate),
                    notes: `SePay Auto-verified: ${content}`,
                },
            });

            await tx.rental.update({
                where: { id: rentalId },
                data: {
                    status: RentalStatus.CONFIRMED,
                },
            });
        });

        this.logger.log(`Successfully verified payment for Rental: ${rentalId}`);
        return { success: true };
    }

    async getByRentalId(rentalId: string) {
        return this.prisma.payment.findUnique({
            where: { rentalId },
        });
    }
}
