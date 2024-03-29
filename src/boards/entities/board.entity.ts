import { Entity, Column as TypeColumn, PrimaryGeneratedColumn, OneToMany, } from "typeorm";
import { Task } from "../../tasks/entities/task.entity";
import { Column } from "./column.entity";


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
  
  }
  

