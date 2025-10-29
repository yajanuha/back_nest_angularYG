<<<<<<< HEAD
import {PartialType} from "@nestjs/mapped-types";
=======
<<<<<<< HEAD
import {PartialType} from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import {IsNotEmpty} from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    name: string;
=======
import { PartialType } from "@nestjs/mapped-types";
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
<<<<<<< HEAD
    name: string;

=======
    name?:string

>>>>>>> d52bdbae78b54397465463853f548d25784dc543
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
}