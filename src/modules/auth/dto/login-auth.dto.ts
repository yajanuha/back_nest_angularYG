<<<<<<< HEAD
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import {User} from "../interfaces/user.interface";

export class LoginAuthDto implements User {
  @IsEmail()
  @IsNotEmpty()
  email!: string;
=======
<<<<<<< HEAD
import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";
import {User} from "../interfaces/user.interface";

export class LoginAuthDto implements User {
@IsEmail()
@IsNotEmpty()
email: string;
@MinLength(6)  
@MaxLength(255)
@IsNotEmpty()
  password: string;
=======
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { User } from '../interfaces/user.interface';

export class LoginAuthDto implements User {
  @IsEmail()
  @IsNotEmpty()
  email: string;
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9

  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
<<<<<<< HEAD
  password!: string;
}
=======
  password: string;
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
