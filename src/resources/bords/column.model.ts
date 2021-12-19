import { v4 as uuid } from 'uuid';
import {IColumn} from '../../types'

class Column implements IColumn {
  id: string;

    title: string;

    order: number;

  constructor({ 
    id = uuid(), 
    title = 'Column', 
    order = 0 }: IColumn) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;