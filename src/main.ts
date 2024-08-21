import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // apply validation to dtos
    new ValidationPipe({
      // set to true to ignore extra fields on body requests
      whitelist: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
