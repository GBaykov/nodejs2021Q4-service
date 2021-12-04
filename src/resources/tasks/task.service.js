const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getTask = (id, boardId) => tasksRepo.getTask(id, boardId);
const addTask = (data, boardId) => tasksRepo.addTask(data, boardId);
const updateTask = (id, data, boardId) => tasksRepo.updateTask(id, data, boardId);
const deleteTask = (id) => tasksRepo.deleteTask(id);

module.exports = { getAll, getTask, addTask, updateTask, deleteTask };