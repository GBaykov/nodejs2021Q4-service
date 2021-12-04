const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const addUser = (data) => usersRepo.addUser(data);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
