import db from '../../db/db';
import { ITask } from '../../types';

import Task from './task.model';

const taskDB = db[2];

export const getAll = async (boardId:string) => {
  const tasks = await taskDB.filter(task => task.boardId === boardId);
  return tasks;
}
   
 
export const getTask = async(id:string, boardId:string) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
    return task || 'Error: no task with such id';
  }

  export const addTask = async(data:ITask, boardId:string ) => {
  const task = new Task(data ); //const task = new Task(data, boardId );
  task.boardId = boardId;
  taskDB.push(task);
  return task || 'Error: error while adding new board';
}

export const updateTask = async(id:string, data:ITask, boardId:string ) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
  const index = await taskDB.findIndex(item => item.id === id);
  const newTask = new Task(data);
  newTask.id = id;
  newTask.boardId = boardId;
  taskDB.splice(index, 1, newTask);
  return (task && newTask && index !== -1) ? newTask : 'Error: error while updeting task';
}

export const deleteTask = async(id:string) => {
  const index = await taskDB.findIndex(item => item.id === id);
  taskDB.splice(index, 1);
  return (index !== -1) ? 202 : 'Error: error while deleting task';
}

//module.exports = { getAll, getTask, addTask, updateTask, deleteTask };
