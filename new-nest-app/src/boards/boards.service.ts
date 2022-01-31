import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {

  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  
 async findAll() {
    const boards = await this.boardsRepository.find();
    return boards;
  }

  async findOne(id: number| string) {
    const board = await this.boardsRepository.findOne(id);
    return board;
  }

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardsRepository.save(createBoardDto);
    return board;
  }

  async update(id: number| string, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardsRepository.update(id, updateBoardDto);
    const updatedBoard = await this.boardsRepository.findOne(id);
    return updatedBoard;
  }

  async remove(id: number| string) {
    Boolean((await this.boardsRepository.delete(id)).affected);
  }
}
