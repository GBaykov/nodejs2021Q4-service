import { v4 as uuid } from 'uuid';

export class CreateBoardDto {

    title: string;
    columns: Column[] | null;
  static createColumns(columns:Column) {
    if (Array.isArray(columns)) {
      return columns.map((col) => new Column({ ...col }));
    }
    return [new Column(columns)];
  }
}

export class Column  {
    id?: string;
      title: string;
      order: number;

      constructor({ 
        id = uuid(), 
        title = 'Column', 
        order = 0 }: Column) {
        this.id = id;
        this.title = title;
        this.order = order;
      }

  }
  