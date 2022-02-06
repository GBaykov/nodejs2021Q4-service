import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode,HttpStatus, UseGuards, NotFoundException  } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileService } from './file.service';



//@UseGuards(JwtAuthGuard)
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create() {
    return 
  }

  @Get(':filename')
  findOne(@Param('filename') id: string) {
  
  }


  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // remove(@Param('id') id: string) {
  //   const user =  this.usersService.remove(id);
  //   if(!user) throw new NotFoundException(`user with id ${id} not found`)
  //   return user;
  // }
}
