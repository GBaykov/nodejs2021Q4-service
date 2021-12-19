import db from '../../db/db';
import Board from './bords.model';
import * as taskService from '../tasks/task.service';
import { IBoard } from '../../types';

const boardsDB = db[1];

/**
 * Returns all Boards in the repo (Promise)
 * @returns All Boards (Promise)
 */
export const getAll = async () => boardsDB;

/**
 * Returns Board by id (Promise)
 * @param id - id of board for search.
 * @returns board or error message (Promise)
 */
export const getBoard = async(id:string) => {
  const board = await boardsDB.find(item => item.id === id);
    return board || 'Error: no board with such id';
  }

  /**
 * Adds the Board to repository
 * @param data - board to be added.
 * @returns added board or error message (Promise)
 */
export const addBoard = async(data:IBoard) => {
    if(!data.columns || !data.title) return 'Error: error while adding new board'
  const board = new Board(data);
  boardsDB.push(board);
  return board || 'Error: error while adding new board';
}

/**
 * Update the Board in repository
 * @param id - id of the board to be updated.
 * @param data - new data for updating board
 * @returns updated board or error message (Promise)
 */
export const updateBoard = async(id:string, data:IBoard) => {
  const board = await boardsDB.find(item => item.id === id);
  const index = await boardsDB.findIndex(item => item.id === id);
  const newBoard = new Board(data);
  newBoard.id = id;
  boardsDB.splice(index, 1, newBoard);
  return (board && newBoard && index !== -1) ? newBoard : 'Error: error while updeting board';
}

/**
 * Delete the Board in repository
 * @param id - id of the board to be deleted.
 * @returns status code (202) or error message (Promise)
 */
export const deleteBoard = async(id:string) => {
  const index = await boardsDB.findIndex(item => item.id === id);
  boardsDB.splice(index, 1);

  db[2].map((task) => {
if(task.boardId === id) {
   taskService.deleteTask(id)
}
return db[2];
  })
  return (index !== -1) ? 202 : 'Error: error while deleting board';
}
