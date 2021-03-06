import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('wx')
  app.enableCors()
  await app.listen(process.env.port || 4444)
}
bootstrap()
