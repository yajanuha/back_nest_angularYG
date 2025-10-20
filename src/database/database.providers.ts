import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { config } from "process";
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    Inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres', 
        host: config.get(' HOST')||'Localhost',
        port: config.get ('PORT'),
        username: config.get('USERNAME')||'root',
        password: config.get('PASSWORD')|| 'PRUEBA', 
        database: config.get ('DATABASE'),
       
      });

      return dataSource.initialize();
    },
  },
];
