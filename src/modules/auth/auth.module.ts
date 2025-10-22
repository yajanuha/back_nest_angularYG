import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
<<<<<<< HEAD
      secret: 'MI CODIGO SECRETO',
      signOptions: { expiresIn: '3600s' }
    })
  ],

  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
 
=======
      secret: "Mi CODIGO SECRETO ",
      signOptions: { expiresIn:'60S'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
