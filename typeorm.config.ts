<<<<<<< HEAD
import {config} from "dotenv";
import { DataSource } from "typeorm";

const env= process.env.NODE_ENV  || 'development'

config({
    override: true,
    path: `.env.${env}`,
    debug:true
})
=======
import { config } from "dotenv"; // corregido "confi" → "config"
import { DataSource } from "typeorm";

const env = process.env.NODE_ENV || 'development';

config({
    override: true,
    path: `./.env.${env}`, // ya estaba correcto
    debug: true // para validar que se está cargando
});
>>>>>>> d52bdbae78b54397465463853f548d25784dc543

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST,
<<<<<<< HEAD
    port: +process.env.PORT!,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts']


});
=======
    port: Number(process.env.PORT), 
    username: process.env.USERNAME,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts']
});
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
