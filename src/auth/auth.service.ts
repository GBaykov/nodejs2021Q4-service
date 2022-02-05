import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, pass: string) {
    const user = await this.usersService.findByLogin(login);
    if(!user) {
      console.log(`can not finnd user by login ${login}`)
      throw new NotFoundException(`can not finnd user by login ${login}`)} //console.log('can not finnd user by login')
    if ( user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    throw new NotFoundException(`${user.password}not equal ${pass}`)
    return null;
  }

  async login(user: User) {
    //   const findedUser = await this.validateUser(user.login, user.password);
    //   if(!findedUser) throw new NotFoundException(`can not finnd user  ${findedUser}`)
    const payload = {
      username: user.name,
      sub: user.id,
      userId: user.id,
      login: user.login,
    };
    // const  access_token = this.jwtService.sign(payload)
    // if(!access_token) throw new NotFoundException('NO access_token ')
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}