import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../users/entities/user.entity';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, pass: string) {
    const user = await this.usersService.findByLogin(login);

    if (!user) {
      return null;
    }
    
    if ( user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    throw new NotFoundException(`${user.password}not equal ${pass}`)
    return null;
  }

  async login(user: LoginUserDto) {
    const payload = {
      password: user.password,

      login: user.login,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async createAdmin(){
    const isAdmin = await this.usersService.findByLogin("admin");
    if(!isAdmin) {
        const adminDTO = {    
            name:'admin',
            login:'admin',
            password:'admin'}
        // if(!user) throw new RequestError('Error in ADMIN: can not create ADMIN', 401)
 await this.usersService.create(adminDTO)
 return true

    } 
      return 'Hello World!-2.0';
    
  }
}