/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column as TypeColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Column } from './column';
import { Task } from './task';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @TypeColumn('varchar', { length: 200 })
  title: string;

  @OneToMany<Column>((_type) => Column, (column: Column): string => column.boardId, {
    cascade: true,
    eager: true,
  })
  columns: Column[];

  @OneToMany<Task>((_type) => Task, (task: Task): string => task.boardId as string, { cascade: true })
  tasks: Task[];

  // static toResponse(board?: Partial<Board>): Partial<Board> | undefined {
  //   return board;
  // }
}
