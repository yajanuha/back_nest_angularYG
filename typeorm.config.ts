import { config } from "dotenv"; // corregido "confi" → "config"
import { DataSource } from "typeorm";

const env = process.env.NODE_ENV || 'development';

config({
    override: true,
    path: `./.env.${env}`, // ya estaba correcto
    debug: true // para validar que se está cargando
});

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT), 
    username: process.env.USERNAME,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts']
});
