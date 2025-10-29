import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { databaseProviders } from './database.providers';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule], // <--- importa ConfigModule
  providers: [...databaseProviders],
  exports: [...databaseProviders],
=======
<<<<<<< HEAD
import { databaseProviders } from './database.providers'; // ✅ nombre correcto
import { ConfigService } from 'src/config/config.service'; // si usas tu propio ConfigService

@Module({
  providers: [...databaseProviders, ConfigService],
  exports: [...databaseProviders],
=======
import { databaseProviders } from './database.providers';
import { ConfigService } from '@nestjs/config';


@Module({
    providers:[...databaseProviders,ConfigService],
    exports:[...databaseProviders]

>>>>>>> d52bdbae78b54397465463853f548d25784dc543
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
})
export class DatabaseModule {}
