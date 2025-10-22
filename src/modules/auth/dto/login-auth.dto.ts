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

  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}