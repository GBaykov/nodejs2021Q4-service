import { ITask } from '../../types';
import * as tasksRepo from './task.memory.repository';

export const getAll = (boardId: string) => tasksRepo.getAll(boardId);
export const getTask = (id: string, boardId: string) => tasksRepo.getTask(id, boardId);
export const addTask = (data: ITask, boardId: string) => tasksRepo.addTask(data, boardId);
export const updateTask = (id: string, data: ITask, boardId: string) => tasksRepo.updateTask(id, data, boardId);
export const deleteTask = (id: string) => tasksRepo.deleteTask(id);
