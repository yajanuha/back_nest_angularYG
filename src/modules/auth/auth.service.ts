import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
<<<<<<< HEAD
    constructor(private jwtService: JwtService) {}
    login(crendenciales: LoginAuthDto) {  

        let payload = {email:"admin@gmail.com", id:1}
        const token = this.jwtService.sign(payload);
        return {token:token};    
    }
}
=======

    constructor(private readonly jwt: JwtService) {}

    login(credenciales: LoginAuthDto) {
        const payload = { email: "admin@gmail.com", id: 1 };
        const token = this.jwt.sign(payload);
        return { token };
    }
}
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
