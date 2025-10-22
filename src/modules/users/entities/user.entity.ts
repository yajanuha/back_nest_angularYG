<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // nombre de tabla seguro en PostgreSQL
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) // columna opcional
  name: string;
=======
import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}
