import { Controller, Get, Post, Body, Patch, Param, Delete, Put,HttpCode,HttpStatus, UseGuards, NotFoundException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@UseGuards(JwtAuthGuard)
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @Get(':id')
   findOne(
    @Param('id') id: string) {
    const board =  this.boardsService.findOne(id);
    if(!board)  throw new NotFoundException(`Board with id ${id} not found`);
    return board;
  }

  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body() updateBoardDto: UpdateBoardDto) {
      const board = this.boardsService.update(id, updateBoardDto);
      if(!board)  throw new NotFoundException(`Board with id ${id} not found`);
    return board;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id') id: string) {
      await this.boardsService.remove(id);
  }
}
