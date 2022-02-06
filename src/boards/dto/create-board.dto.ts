import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { Column } from '../entities/column.entity';

export class CreateBoardDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  columns: Column[] | null;
  // static createColumns(columns:Column) {
  //   if (Array.isArray(columns)) {
  //     return columns.map((col) => new Column({ ...col }));
  //   }
  //   return [new Column(columns)];
  // }
}

// export class Column  {
//     id?: string;
//       title: string;
//       order: number;

//       constructor({ 
//         id = uuid(), 
//         title = 'Column', 
//         order = 0 }: Column) {
//         this.id = id;
//         this.title = title;
//         this.order = order;
//       }

//   }
  