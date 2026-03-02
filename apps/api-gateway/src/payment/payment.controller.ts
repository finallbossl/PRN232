import { 
    Controller, 
    Post, 
    Body, 
    Get, 
    Param, 
    HttpCode, 
    HttpStatus,
    Logger,
    Headers
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiResponse } from '@goride/shared';

@Controller('payments')
export class PaymentController {
    private readonly logger = new Logger(PaymentController.name);

    constructor(private readonly paymentService: PaymentService) { }

    /**
     * SePay Webhook Endpoint
     */
    @Post('webhook/sepay')
    @HttpCode(HttpStatus.OK)
    async handleWebhook(@Body() payload: any, @Headers('authorization') authHeader: string) {
        this.logger.log('Received SePay Webhook');
        return this.paymentService.handleSePayWebhook(payload, authHeader);
    }

    /**
     * Get payment info by rental ID
     */
    @Get('rental/:id')
    async getByRental(@Param('id') id: string): Promise<ApiResponse> {
        const payment = await this.paymentService.getByRentalId(id);
        return {
            success: !!payment,
            data: payment,
            message: payment ? 'Lấy thông tin thanh toán thành công' : 'Không tìm thấy thông tin thanh toán',
        };
    }
}
