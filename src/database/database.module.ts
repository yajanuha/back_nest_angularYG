import { Module } from '@nestjs/common';
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
})
export class DatabaseModule {}
