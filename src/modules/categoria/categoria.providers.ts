import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Inject } from "@nestjs/common";

export const categoriaProviders=[
    {
        provide:'CATEGORIA_REPOSITORY',
        useFactory: (dataSource:DataSource)=>dataSource.getRepository(Categoria),
        inject:['DATABASE_CONNECTION']

    }
]