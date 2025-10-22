import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
<<<<<<< HEAD
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'MI_CODIGO_SECRETO',
        });
    }
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    } 
=======
import { ExtractJwt,Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: "MI_CODIGO_SECRETO"



        })

    }
    async validate(payload: any){
        return{email: payload.email, id:payload.id}
    }
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
}