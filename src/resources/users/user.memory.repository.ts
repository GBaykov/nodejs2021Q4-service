//import User from "./user.model";
import {IUser} from '../../types';

import db from '../../db/db';
import { UsersDB } from "./users.db";

import { RequestError } from "../../logger/errorHandler";

import { getRepository } from 'typeorm';
import { User } from '../../entities/user';

/**
 * Returns all Users in the repo (Promise)
 * @returns All Users (Promise)
 */
export const getAll = async () =>  {
  return getRepository(User).find({})
 //return UsersDB.findMany()
 
  // if(!db[0]) throw new RequestError('Error: no users', 404)
  // return db[0];
};
 
/**
 * Returns User by id (Promise)
 * @param id - id of user for search.
 * @returns user or error message (Promise)
 */
// export const getUser = async(id:string):Promise<undefined | IUser>  => { 
//   return UsersDB.findOne(id)
  // const user = await db[0].find(item => item.id === id);
  // if(!user) throw new RequestError('Error: no user with such id', 404)
  //   return User.toResponse(user);
  // }

/**
 * Adds the User to repository
 * @param data - user to be added.
 * @returns added user or error message (Promise)
 */
//   export const addUser = async(data:IUser) => {
//   const user = new User(data);
//   if(!user) throw new RequestError('Error: can not create user', 404)
//   db[0].push(user);
//   return User.toResponse(user);
// }

/**
 * Update the User in repository
 * @param id - id of the user to be updated.
 * @param data - new data for updating user
 * @returns updated user or error message (Promise)
 */
// export const updateUser = async(id:string, data:IUser) => {
//   const user = await db[0].find(item => item.id === id);
//   if(!user) throw new RequestError('Error in updateUser: no user with such id', 404)
//   const index = await db[0].findIndex(item => item.id === id);
//   const newUser = new User(data);
//   newUser.id = id;
//   db[0].splice(index, 1, newUser);
//   if(user && newUser && index !== -1) {
//     return User.toResponse(newUser) 
//   } throw new RequestError('Error: error while updeting user', 404);
// }

/**
 * Delete the User in repository
 * @param id - id of the user to be deleted.
 * @returns status code (202) or error message (Promise)
 */
// export const deleteUser = async(id:string) => {
//   const index = await db[0].findIndex(item => item.id === id);
//   if(!index) throw new RequestError('Error in deleteUser: no user with such id ', 404)
//   db[0].splice(index, 1);
//   db[2].map((item) => {
//     if(item.userId === id){
//       const it = item;
//       it.userId = null;
//     }
//     return db[2]
//   });
//   if(index !== -1) {
//     return 200
//   } throw new RequestError('Error: error while deleting user', 404);
// }


