import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AuthModule } from './modules/auth/auth.module'; 
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule], 
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

=======
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
<<<<<<< HEAD
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
=======
import { ConfigService } from './config/config.service';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
})
export class AppModule {}
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
