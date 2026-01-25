import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from '@goride/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Standardize error responses
  app.useGlobalFilters(new HttpExceptionFilter());
  
  // Enable CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3002', 'http://localhost:3003'],
    credentials: true,
  });

  // Global prefix
  const apiPrefix = process.env.API_PREFIX || 'api/v1';
  app.setGlobalPrefix(apiPrefix);

  const port = process.env.GATEWAY_PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 API Gateway is running on: http://localhost:${port}/${apiPrefix}`);
}
bootstrap();
