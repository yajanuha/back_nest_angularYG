import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
=======
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
>>>>>>> d52bdbae78b54397465463853f548d25784dc543

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  // class-validator
  app.useGlobalPipes(new ValidationPipe());

  // swagger
=======
  // Habilitar validación global de DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Swagger config
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

<<<<<<< HEAD
=======
  // ✅ Crear el documento correctamente
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
<<<<<<< HEAD
=======
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}
bootstrap();
