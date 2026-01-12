import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global prefix
  const apiPrefix = configService.get<string>('API_PREFIX', 'api/v1');
  app.setGlobalPrefix(apiPrefix);

  // CORS configuration
  const corsOrigin = configService
    .get<string>('CORS_ORIGIN', 'http://localhost:3001')
    .split(',');
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('GoRide API Gateway')
    .setDescription('GoRide - API Gateway - Điểm truy cập duy nhất cho frontend')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = configService.get<number>('GATEWAY_PORT', 3000);
  await app.listen(port);
  console.log(`🚀 API Gateway is running on: http://localhost:${port}`);
  console.log(`📚 API Documentation: http://localhost:${port}/api/docs`);
}

bootstrap();
