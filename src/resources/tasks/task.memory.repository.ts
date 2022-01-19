import { getRepository } from 'typeorm';
////import db from '../../db/db';
import { Task } from '../../entities';
import { RequestError } from '../../logger/errorHandler';
//import { ITask } from '../../types';
//import Task from './task.model';

//const taskDB = db[2];

/**
 * Returns all Tasks on bord (Promise)
 * @param boardId - Id of board where located all necessary tasks
 * @returns All Tasks (Promise)
 */
export const getAll = async (boardId:string) => {
  const taskRepository = await getRepository(Task);
  const Tasks  = await taskRepository.find();
  return Tasks;
  
  // if(!boardId ) throw new RequestError('Error in getAll tasks NOO BOARDID ', 404)
  // const allTasks = await  getRepository(Task).find({boardId} );
  // if(!allTasks) throw new RequestError("Error in getAll: no tasks", 404)
  // return allTasks;

    //if( !id) throw new RequestError('NOO BOARDID  ID', 404) 
 // const Tasks : Task[] = await taskRepository.find({ where: { boardId } });
  // return Tasks;
  // const tasks =  allTasks.filter(task => task.boardId === boardId);
 
}
   
 /**
 * Returns Task by id on some board(Promise)
 * @param id - id of task for search.
 * @param boardId - Id of board where located necessary task
 * @returns task or error message (Promise)
 */
export const getTask = async(id:string, boardId:string) => {
    
  // const repo = getRepository(Task);
  //   const task = await repo.findOne({ where: { id, boardId } });
  //   return task;

  // const taskRepository = getRepository(Task);
  // const task : Task[] = await taskRepository.find({ where: { id:id, boardId:boardId } });
  // return task; 


  const task = await getRepository(Task).findOne( {id} );
  console.log('getTask', task)
  if(!task) throw new RequestError("Error in getTask: no task with such id or boardId", 404);
    return task;
  }

 /**
 * Adds the Task to repository
 * @param data - task to be added.
 * @param boardId - Id of board for task
 * @returns added task or error message (Promise)
 */
  export const addTask = async(data:Task, boardId:string ) => {
    const task = await  getRepository(Task).save(data);
    if(!task) throw new RequestError("Error in addTask: error while adding new task", 404)
  //const task = new Task(data); 
  task.boardId = boardId;
  //taskDB.push(task);
  return task;
}

   /**
 * Update the Task in repository
 * @param id - id of updating task
 * @param data -new data of task 
 * @param boardId - Id of board in updating task
 * @returns updated task or error message (Promise)
 */
export const updateTask = async(id:string, data:Task, boardId:string ) => {
  const task = await getRepository(Task).findOne({ id  });
console.log("update DATA", data)
  //const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
  if(!task) throw new RequestError("Error in updateTask: no task with such id or boardId", 404);
  // const index = await taskDB.findIndex(item => item.id === id);
  // const newTask = new Task(data);
  task.title = data.title;
  task.userId = data.userId;
  task.description = data.description;
  task.order = data.order;
  task.columnId = data.columnId;
 
  await getRepository(Task).save(task)
  console.log('updateTask', task)
  // taskDB.splice(index, 1, newTask);
  // if(!task && !newTask && index === -1) throw new RequestError("Error: error while updeting task", 404);
  return task;
}

/**
 * Delete Task by id (Promise)
 * @param id - id of task to be deleting
 * @returns status code (202) or error message (Promise)
 */
export const deleteTask = async(id:string) => {
  await getRepository(Task).delete(id)
  // const index = await taskDB.findIndex(item => item.id === id);
  // if(!index) throw new RequestError("Error in deleteTask: no task with such id", 404);
  // taskDB.splice(index, 1);
  //return 202
}


