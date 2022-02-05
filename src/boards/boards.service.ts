import { NotFoundException , Injectable } from '@nestjs/common';
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
    if (!board) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
    return board;
  }

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardsRepository.save(createBoardDto);
    return board;
  }

  async update(id: number| string, updateBoardDto: UpdateBoardDto) {
   // const board = await this.boardsRepository.update(id, updateBoardDto);
   const board = await this.boardsRepository.findOne(id);
   if (!board) {
    throw new NotFoundException(`Board with id ${id} not found`);
  }
  //  const updatedBoard = { ...board, ...updateBoardDto };

  //  await this.boardsRepository.save(updatedBoard);
    board.title = updateBoardDto.title;
    board.columns = updateBoardDto.columns;

    return this.boardsRepository.save(board);
  
  }

  async remove(id: number| string) {
    
    return Boolean((await this.boardsRepository.delete(id)).affected);
  }
}
