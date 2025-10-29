<<<<<<< HEAD
import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';
=======
<<<<<<< HEAD
import { ConfigService } from "src/config/config.service";
=======
import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { config } from "process";
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
import { DataSource } from "typeorm";
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
<<<<<<< HEAD
    inject: [ConfigService], // <--- debe coincidir con el provider
=======
<<<<<<< HEAD
    inject: [ConfigService], // ✅ minúscula
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
<<<<<<< HEAD
        port: +config.get('PORT') || 5432,
        username: config.get('USERNAME') || 'postgres',
        password: config.get('PASSWORD') || 'password',
        database: config.get('DATABASE') || 'mydb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });
=======
        port: +config.get('PORT_DB'), // el + convierte a número
        username: config.get('USERNAME')||'postgress',
        password: config.get('PASSWORD') || '199723',
        database: config.get('DATABASE'), // ✅ corregido
=======
    Inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres', 
        host: config.get(' HOST')||'Localhost',
        port: config.get ('PORT'),
        username: config.get('USERNAME')||'root',
        password: config.get('PASSWORD')|| 'PRUEBA', 
        database: config.get ('DATABASE'),
       
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
      });

>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
      return dataSource.initialize();
    },
  },
];
