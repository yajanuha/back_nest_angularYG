<<<<<<< HEAD
import {PartialType} from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import {IsNotEmpty} from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    name: string;
=======
import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name?:string

>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}