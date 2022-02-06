import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../users/entities/user.entity';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';


@Injectable()
export class FileService {

  uploadByFastify(req: FastifyRequest,res: FastifyReply){
return req
  }

  uploadByExpress(req: Request, res: Response){
    return req
  }

  download(filename: string){
console.log(filename)

  }
 
}