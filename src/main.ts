import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

   const config = new DocumentBuilder()
=======
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
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
<<<<<<< HEAD
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen( 3000);
=======

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
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
}
bootstrap();
