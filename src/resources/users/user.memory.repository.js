// const {db} = require('../db/db')
const users = [];
const bords = [];
const tasks = [];

const db = [
    users, 
//= [
//       {
//           id: 1,
//           name: 'Gleb',
//           login: 'user',
//   password: 'P@55w0rd'
//       },
//       {
//         id: 2,
//         name: 'fgh',
//         login: 'fg',
// password: '1234'
//     }
//   ],
  bords,
  tasks
]
const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   db[0]

;
 
const getUser = async(id) => {
  // console.log(id)
  const user = await db[0].find(item => item.id === id);
  return user;
  }

module.exports = { getAll, getUser };

