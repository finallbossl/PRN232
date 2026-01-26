import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from '@goride/shared';

async function bootstrap() {
  // HTTP Server (for health checks, etc.)
  const app = await NestFactory.create(AppModule);

  // Standardize error responses
  app.useGlobalFilters(new HttpExceptionFilter());

  const httpPort = process.env.AUTH_SERVICE_HTTP_PORT || 3001;
  await app.listen(httpPort);
  console.log(`🔐 Auth Service HTTP is running on: http://localhost:${httpPort}`);

  // gRPC Microservice
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'auth',
        protoPath: join(process.cwd(), 'proto/auth.proto'),
        url: `${process.env.AUTH_SERVICE_HOST || 'localhost'}:${process.env.AUTH_SERVICE_PORT || 50051}`,
      },
    },
  );

  microservice.useGlobalFilters(new HttpExceptionFilter());

  await microservice.listen();
  console.log(`🔐 Auth Service gRPC is running on: ${process.env.AUTH_SERVICE_HOST || 'localhost'}:${process.env.AUTH_SERVICE_PORT || 50051}`);
}
bootstrap();
