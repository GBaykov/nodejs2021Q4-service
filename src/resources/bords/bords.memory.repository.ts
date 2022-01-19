import db from '../../db/db';
//import Board from './bords.model';
import * as taskService from '../tasks/task.service';
import { IBoard } from '../../types';
import { RequestError } from '../../logger/errorHandler';
import { getRepository } from 'typeorm';
import { Board } from '../../entities';

const boardsDB = db[1];

/**
 * Returns all Boards in the repo (Promise)
 * @returns All Boards (Promise)
 */
 export const getAll = async ():Promise<Board[]> =>  {
  const board = await  getRepository(Board).find();
  if(!board) throw new RequestError('Error: no Board', 404)
  return board;
};

/**
 * Returns Board by id (Promise)
 * @param id - id of board for search.
 * @returns board or error message (Promise)
 */
export const getBoard = async(id:string) => {
  const board = await  getRepository(Board).findOne(id);
  if(!board) throw new RequestError('Error in getBoard:id is absent or no board with such id', 404);
    return board;
  }

  /**
 * Adds the Board to repository
 * @param data - board to be added.
 * @returns added board or error message (Promise)
 */
export const addBoard = async(data:Board) => {
  const board = await  getRepository(Board).save(data);
    if(!data.columns || !data.title) throw new RequestError('Error in addBoard: data.columns or data.title absent', 404); 
  //const board = new Board(data);
  //boardsDB.push(board);
  return board;
}

/**
 * Update the Board in repository
 * @param id - id of the board to be updated.
 * @param data - new data for updating board
 * @returns updated board or error message (Promise)
 */
export const updateBoard = async(id:string, data:Board) => {
  const board = await  getRepository(Board).findOne(id);
  if(!board) throw new RequestError('Error in updateBoard:id is absent or no board with such id', 404);
  board.columns = await data.columns;
  board.title = await data.title;
  await getRepository(Board).save(board);
  // const index = await boardsDB.findIndex(item => item.id === id);
  // const newBoard = new Board(data);
  // newBoard.id = id;
  // boardsDB.splice(index, 1, newBoard);
  // if(!board && !newBoard && index === -1) throw new RequestError('Error: error while updeting board', 404);
  return board;
}

/**
 * Delete the Board in repository
 * @param id - id of the board to be deleted.
 * @returns status code (202) or error message (Promise)
 */
export const deleteBoard = async(id:string) => {
  Boolean((await getRepository(Board).delete(id)).affected);
  
//   const index = await boardsDB.findIndex(item => item.id === id);
//   boardsDB.splice(index, 1);

//   db[2].map((task) => {
// if(task.boardId === id) {
//    taskService.deleteTask(id)
// }
// return db[2];
//   })
//   return 202
}
