const {db} = require('../../db/db');
const Board = require('./bords.model');
const taskService = require('../tasks/task.service');

const boardsDB = db[1];

const getAll = async () => boardsDB;
  // TODO: mock implementation. should be replaced during task development
   
 
const getBoard = async(id) => {
  const board = await boardsDB.find(item => item.id === id);
    return board || 'Error: no board with such id';
  }

const addBoard = async(data) => {
    if(!data.columns || !data.title) return 'Error: error while adding new board'
  const board = new Board(data);
  boardsDB.push(board);
  return board || 'Error: error while adding new board';
}

const updateBoard = async(id, data) => {
  const board = await boardsDB.find(item => item.id === id);
  const index = await boardsDB.findIndex(item => item.id === id);
  const newBoard = new Board(data);
  newBoard.id = id;
  boardsDB.splice(index, 1, newBoard);
  return (board && newBoard && index !== -1) ? newBoard : 'Error: error while updeting board';
}

const deleteBoard = async(id) => {
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

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };