import 'dotenv/config'; // Load .env variables
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: 'rental',
            protoPath: join(process.cwd(), 'proto/rental.proto'),
            url: `${process.env.RENTAL_SERVICE_HOST || '127.0.0.1'}:${process.env.RENTAL_SERVICE_PORT || 50054}`,
        },
    });

    await app.listen();
    console.log(`📑 Rental Service gRPC is running on: ${process.env.RENTAL_SERVICE_HOST || '127.0.0.1'}:${process.env.RENTAL_SERVICE_PORT || 50054}`);
}
bootstrap();
