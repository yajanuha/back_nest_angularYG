import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService], // <--- debe coincidir con el provider
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT') || 5432,
        username: config.get('USERNAME') || 'postgres',
        password: config.get('PASSWORD') || 'password',
        database: config.get('DATABASE') || 'mydb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];
