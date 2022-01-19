/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column as TypeColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Board } from './board';
import { Task } from './task';

@Entity()
export class Column {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((_type) => Board, (board) => board.columns, { onDelete: 'CASCADE' })
  boardId: string;

  @TypeColumn('varchar', { length: 200 })
  title: string;

  @TypeColumn('int')
  order: number;

  @OneToMany<Task>((_type) => Task, (task: Task): string => task.columnId as string, { cascade: true })
  tasks: Task[];

  // static toResponse = (column?: Partial<Column>): Partial<Column> | undefined => column;
}
