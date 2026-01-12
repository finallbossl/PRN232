import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Connect microservice với gRPC transport
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, '../../../proto/auth.proto'),
      url: `${configService.get<string>('AUTH_SERVICE_HOST', 'localhost')}:${configService.get<number>('AUTH_SERVICE_PORT', 50051)}`,
    },
  });

  await app.startAllMicroservices();
  console.log(`🔐 Auth Service (gRPC) is running on: ${configService.get<string>('AUTH_SERVICE_HOST', 'localhost')}:${configService.get<number>('AUTH_SERVICE_PORT', 50051)}`);
  
  // Có thể chạy HTTP server cho health check
  const httpPort = configService.get<number>('AUTH_SERVICE_HTTP_PORT', 3001);
  await app.listen(httpPort);
  console.log(`📡 Auth Service HTTP is running on: http://localhost:${httpPort}`);
}

bootstrap();
