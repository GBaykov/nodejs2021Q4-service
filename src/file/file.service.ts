import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../users/entities/user.entity';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class FileService {
  constructor(
    private usersService: UsersService,

  ) {}

 
}