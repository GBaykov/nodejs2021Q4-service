import { User ,DB,Board,Task} from '../types';

const users:User[] = [{id: 'string',
name: 'string',
login: 'string',
password: 'string'}];

const boards:Array<Board>= [
  {id: 'string',
title: 'string',
columns: null,
}];

const tasks:Array<Task> = [
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

    module.exports =  {db} 
