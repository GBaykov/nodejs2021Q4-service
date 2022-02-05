
import { Entity, Column as TypeColumn, PrimaryGeneratedColumn, ManyToOne,JoinColumn,Index } from 'typeorm';
import { Board } from '../../boards/entities/board.entity';
import { Column } from '../../boards/entities/column.entity';
import { User } from '../../users/entities/user.entity';

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
  boardId: string | null;

  @ManyToOne((_type) => Column, { onDelete: 'CASCADE' })
  @TypeColumn('uuid', { name: 'columnIdId', nullable: true })
  columnId: string | null;


}