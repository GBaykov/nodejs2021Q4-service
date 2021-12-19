import db from '../../db/db';

import Board from './bords.model';
import * as taskService from '../tasks/task.service';
import { IBoard } from '../../types';

const boardsDB = db[1];

export const getAll = async () => boardsDB;
   
 
export const getBoard = async(id:string) => {
  const board = await boardsDB.find(item => item.id === id);
    return board || 'Error: no board with such id';
  }

export const addBoard = async(data:IBoard) => {
    if(!data.columns || !data.title) return 'Error: error while adding new board'
  const board = new Board(data);
  boardsDB.push(board);
  return board || 'Error: error while adding new board';
}

export const updateBoard = async(id:string, data:IBoard) => {
  const board = await boardsDB.find(item => item.id === id);
  const index = await boardsDB.findIndex(item => item.id === id);
  const newBoard = new Board(data);
  newBoard.id = id;
  boardsDB.splice(index, 1, newBoard);
  return (board && newBoard && index !== -1) ? newBoard : 'Error: error while updeting board';
}

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

// module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };