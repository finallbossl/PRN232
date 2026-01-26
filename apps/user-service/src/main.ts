import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: 'user',
            protoPath: join(process.cwd(), 'proto/user.proto'),
            url: `${process.env.USER_SERVICE_HOST || 'localhost'}:${process.env.USER_SERVICE_PORT || 50052}`,
        },
    });

    await app.listen();
    console.log(`👤 User Service gRPC is running on: ${process.env.USER_SERVICE_HOST || 'localhost'}:${process.env.USER_SERVICE_PORT || 50052}`);
}
bootstrap();
