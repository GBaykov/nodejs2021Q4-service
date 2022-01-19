import { ITask } from '../../types';
import * as tasksRepo from './task.memory.repository';

/**
 * Returns all Tasks on bord (Promise)
 * @param boardId - Id of board where located all necessary tasks
 * @returns All Tasks (Promise)
 */
// export const getAll = (boardId: string) => tasksRepo.getAll(boardId);

 /**
 * Returns Task by id on some board(Promise)
 * @param id - id of task for search.
 * @param boardId - Id of board where located necessary task
 * @returns task or error message (Promise)
 */
// export const getTask = (id: string, boardId: string) => tasksRepo.getTask(id, boardId);

 /**
 * Adds the Task to repository
 * @param data - task to be added.
 * @param boardId - Id of board for task
 * @returns added task or error message (Promise)
 */
// export const addTask = (data: ITask, boardId: string) => tasksRepo.addTask(data, boardId);

   /**
 * Update the Task in repository
 * @param id - id of updating task
 * @param data -new data of task 
 * @param boardId - Id of board in updating task
 * @returns updated task or error message (Promise)
 */
// export const updateTask = (id: string, data: ITask, boardId: string) => tasksRepo.updateTask(id, data, boardId);

/**
 * Delete Task by id (Promise)
 * @param id - id of task to be deleting
 * @returns status code (202) or error message (Promise)
 */
// export const deleteTask = (id: string) => tasksRepo.deleteTask(id);
