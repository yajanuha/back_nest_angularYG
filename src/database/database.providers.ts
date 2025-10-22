<<<<<<< HEAD
import { ConfigService } from "src/config/config.service";
=======
import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { config } from "process";
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
<<<<<<< HEAD
    inject: [ConfigService], // ✅ minúscula
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
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

      return dataSource.initialize();
    },
  },
];
