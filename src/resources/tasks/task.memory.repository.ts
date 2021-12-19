import db from '../../db/db';
import { ITask } from '../../types';
import Task from './task.model';

const taskDB = db[2];

/**
 * Returns all Tasks on bord (Promise)
 * @param boardId - Id of board where located all necessary tasks
 * @returns All Tasks (Promise)
 */
export const getAll = async (boardId:string) => {
  const tasks = await taskDB.filter(task => task.boardId === boardId);
  return tasks;
}
   
 /**
 * Returns Task by id on some board(Promise)
 * @param id - id of task for search.
 * @param boardId - Id of board where located necessary task
 * @returns task or error message (Promise)
 */
export const getTask = async(id:string, boardId:string) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
    return task || 'Error: no task with such id';
  }

 /**
 * Adds the Task to repository
 * @param data - task to be added.
 * @param boardId - Id of board for task
 * @returns added task or error message (Promise)
 */
  export const addTask = async(data:ITask, boardId:string ) => {
  const task = new Task(data); 
  task.boardId = boardId;
  taskDB.push(task);
  return task || 'Error: error while adding new task';
}

   /**
 * Update the Task in repository
 * @param id - id of updating task
 * @param data -new data of task 
 * @param boardId - Id of board in updating task
 * @returns updated task or error message (Promise)
 */
export const updateTask = async(id:string, data:ITask, boardId:string ) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
  const index = await taskDB.findIndex(item => item.id === id);
  const newTask = new Task(data);
  newTask.id = id;
  newTask.boardId = boardId;
  taskDB.splice(index, 1, newTask);
  return (task && newTask && index !== -1) ? newTask : 'Error: error while updeting task';
}

/**
 * Delete Task by id (Promise)
 * @param id - id of task to be deleting
 * @returns status code (202) or error message (Promise)
 */
export const deleteTask = async(id:string) => {
  const index = await taskDB.findIndex(item => item.id === id);
  taskDB.splice(index, 1);
  return (index !== -1) ? 202 : 'Error: error while deleting task';
}


