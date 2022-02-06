import { Controller, Request, Post, UseGuards, Get, Body, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LoginUserDto } from './users/dto/login-user.dto';
import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  createAdmin(){
    return this.authService.createAdmin()
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUser:LoginUserDto ) {
    const token = this.authService.login(loginUser);
    return token;
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}

