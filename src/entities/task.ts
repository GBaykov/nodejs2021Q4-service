/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column as TypeColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user';
import { Board } from './board';
import { Column } from './column';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @TypeColumn('varchar', { length: 200 })
  title: string;

  @TypeColumn('int')
  order: number;

  @TypeColumn('varchar', { length: 250 })
  description: string;

  @ManyToOne((_type) => User, { onDelete: 'SET NULL' })
  @TypeColumn('uuid', { name: 'userIdId', nullable: true })
  userId: string | null;

  @ManyToOne((_type) => Board, { onDelete: 'CASCADE' })
  @TypeColumn('uuid', { name: 'boardIdId', nullable: true })
  boardId: string;

  @ManyToOne((_type) => Column, { onDelete: 'CASCADE' })
  @TypeColumn('uuid', { name: 'columnIdId', nullable: true })
  columnId: string;

  //static toResponse = (task?: Partial<Task>): Partial<Task> | undefined => task;
}
