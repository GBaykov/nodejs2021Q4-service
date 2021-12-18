import { IUser ,DB,IBoard,ITask} from '../types';

const users:IUser[] = [{id: 'string',
name: 'string',
login: 'string',
password: 'string'}];

const boards:Array<IBoard>= [
  {id: 'string',
title: 'string',
columns: null,
}];

const tasks:Array<ITask> = [
  {id: 'string',
title: 'string',
order:1,
description: 'string',
userId: 'string',
boardId: 'string',
columnId: 'string',}];


   const db:DB = [
  users,
  boards,
  tasks
 ]

    export default db 
