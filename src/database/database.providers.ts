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
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345', 
        database: 'backend_yajanuhagrefa',
       
      });

      return dataSource.initialize();
    },
  },
];
