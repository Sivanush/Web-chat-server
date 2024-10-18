import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:4200' });
  app.useWebSocketAdapter(new IoAdapter(app))
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
