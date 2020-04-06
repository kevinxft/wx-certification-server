import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('wx-certification-api')
  app.enableCors() 
  await app.listen(4000);
}
bootstrap();
