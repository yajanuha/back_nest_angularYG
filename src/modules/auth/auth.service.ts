import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly jwt: JwtService) {}

    login(credenciales: LoginAuthDto) {
        const payload = { email: "admin@gmail.com", id: 1 };
        const token = this.jwt.sign(payload);
        return { token };
    }
}
