import { v4 as uuid } from 'uuid';
import Column from './column.model';
import { IColumn, IBoard} from '../../types'

class Board implements IBoard{
  id: string;

    title: string;

    columns: IColumn[] | null;

  constructor({
    id = uuid(),
    title = 'title',
    columns,
  }:IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * create Column
   * @param columns - columns params for creacing new Column
   * @returns newly created Column
   */
  static createColumns(columns:IColumn) {
    if (Array.isArray(columns)) {
      return columns.map((col) => new Column({ ...col }));
    }
    return [new Column(columns)];
  }

}

export default Board;