import { IBoard } from '../../types';
import * as boardsRepo from './bords.memory.repository';

export const getAll = () => boardsRepo.getAll();
export const getBoard = (id: string) => boardsRepo.getBoard(id);
export const addBoard = (data:IBoard) => boardsRepo.addBoard(data);
export const updateBoard = (id: string, data: IBoard) => boardsRepo.updateBoard(id, data);
export const deleteBoard = (id: string) => boardsRepo.deleteBoard(id);

// module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };