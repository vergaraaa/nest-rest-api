import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // apply validation to dtos
    new ValidationPipe({
      // set to true to ignore extra fields on body requests
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Nest Api')
    .setDescription('Basic nest api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    // origin: 'www.domain.com'
  });

  await app.listen(3000);
}
bootstrap();
