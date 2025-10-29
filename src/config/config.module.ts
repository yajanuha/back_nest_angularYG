import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
<<<<<<< HEAD
  exports: [ConfigService], // <--- Muy importante
=======
  exports: [ConfigService]
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
})
export class ConfigModule {}
