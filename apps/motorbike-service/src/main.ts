import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: 'motorbike',
            protoPath: join(process.cwd(), 'proto/motorbike.proto'),
            url: `${process.env.MOTORBIKE_SERVICE_HOST || 'localhost'}:${process.env.MOTORBIKE_SERVICE_PORT || 50053}`,
        },
    });

    await app.listen();
    console.log(`🏍️ Motorbike Service gRPC is running on: ${process.env.MOTORBIKE_SERVICE_HOST || 'localhost'}:${process.env.MOTORBIKE_SERVICE_PORT || 50053}`);
}
bootstrap();
