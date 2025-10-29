<<<<<<< HEAD
import { Controller, Post, Body, ConsoleLogger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
 console.log(userObject);
    return userObject;
  }

  @Post('login')
  login(@Body() credenciales: LoginAuthDto) {
    return this.authService.login(credenciales);
  }
=======
<<<<<<< HEAD
import { Body,Controller, Post } from '@nestjs/common';
=======
import { Body,Controller,Post } from '@nestjs/common';
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

<<<<<<< HEAD
constructor(private authService: AuthService) {
}

    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
=======
    constructor(private authService: AuthService){
        
    }
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
        console.log(userObj);
        return userObj;
    }

    @Post('login')
<<<<<<< HEAD
    login(@Body() crendenciales: LoginAuthDto) {
        return this.authService.login(crendenciales);
=======
    login(@Body()credenciales: LoginAuthDto){
        return this.authService.login(credenciales)

>>>>>>> d52bdbae78b54397465463853f548d25784dc543
    }
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
}
