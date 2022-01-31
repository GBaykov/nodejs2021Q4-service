import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Column } from './entities/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Column])],
  controllers: [BoardsController],
  providers: [BoardsService],
  exports:[TypeOrmModule]
})
export class BoardsModule {}
