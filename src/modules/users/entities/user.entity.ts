import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // nombre de tabla seguro en PostgreSQL
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) // columna opcional
  name: string;
}
