const boardsRepo = require('./bords.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoard = (id) => boardsRepo.getBoard(id);
const addBoard = (data) => boardsRepo.addBoard(data);
const updateBoard = (id, data) => boardsRepo.updateBoard(id, data);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };