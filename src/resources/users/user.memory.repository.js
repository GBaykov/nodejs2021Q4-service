// const { use } = require("chai");
const User = require("./user.model");
const {db} = require('../../db/db')

// const users = [];
// const bords = [];
// const tasks = [];

// const db = [
//     users, 
//   bords,
//   tasks
// ]

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   db[0];
 
const getUser = async(id) => {
  let user = await db[0].find(item => item.id === id);
    user = user ?  User.toResponse(user) : 'Error: no user with such id';
    return user;
  }

const addUser = async(data) => {
  const user = new User(data);
  db[0].push(user);
  return user ?  User.toResponse(user) : 'Error: error while adding new user';
}

const updateUser = async(id, data) => {
  const user = await db[0].find(item => item.id === id);
  const index = await db[0].findIndex(item => item.id === id);
  const newUser = new User(data);
  newUser.id = id;
  db[0].splice(index, 1, newUser);
  return (user && newUser && index !== -1) ? User.toResponse(newUser) : 'Error: error while updeting user';
}

const deleteUser = async(id) => {
  const index = await db[0].findIndex(item => item.id === id);
  db[0].splice(index, 1);
  return (index !== -1) ? 202 : 'Error: error while deleting user';
}

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

