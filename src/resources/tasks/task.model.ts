import { v4 as uuid }from 'uuid';
import { ITask } from '../../types';

class Task implements ITask {
  id:string;
  title: string
    order: number
    description: string
    userId: string | null
    boardId: string | null
    columnId: string | null;
  constructor({
    id = uuid(),
    title,
    order,
    description,
    userId, 
    boardId,
    columnId
  }:ITask) {
    this.id = id;
    this.title = title;
    this.order = order;
     this.description = description;
     this.userId = userId;
     this.boardId = boardId;
     this.columnId = columnId;
  }

}

export default Task;