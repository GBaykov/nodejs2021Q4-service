const {db} = require('../../db/db');
const Task = require('./task.model');

const taskDB = db[2];

const getAll = async (boardId) => {
  const tasks = await taskDB.filter(task => task.boardId === boardId);
  return tasks;
}
   
 
const getTask = async(id, boardId) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
    return task || 'Error: no task with such id';
  }

const addTask = async(data, boardId ) => {
  const task = new Task(data, boardId );
  task.boardId = boardId;
  taskDB.push(task);
  return task || 'Error: error while adding new board';
}

const updateTask = async(id, data, boardId ) => {
  const task = await taskDB.find((item) => item.id === id && item.boardId === boardId);
  const index = await taskDB.findIndex(item => item.id === id);
  const newTask = new Task(data);
  newTask.id = id;
  newTask.boardId = boardId;
  taskDB.splice(index, 1, newTask);
  return (task && newTask && index !== -1) ? newTask : 'Error: error while updeting task';
}

const deleteTask = async(id) => {
  const index = await taskDB.findIndex(item => item.id === id);
  taskDB.splice(index, 1);
  return (index !== -1) ? 202 : 'Error: error while deleting task';
}

module.exports = { getAll, getTask, addTask, updateTask, deleteTask };
