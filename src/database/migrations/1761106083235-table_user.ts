import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1761106083235 implements MigrationInterface {
    name = 'TableUser1761106083235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE "users" (
            "id" SERIAL NOT NULL,
            "name" character varying,
            CONSTRAINT "PK_users_id" PRIMARY KEY ("id")
          )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
