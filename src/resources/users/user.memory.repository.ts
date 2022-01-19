import { getRepository } from 'typeorm';
import {IUser} from '../../types';
import { RequestError } from "../../logger/errorHandler";

import { User } from '../../entities/user';


/**
 * Returns all Users in the repo (Promise)
 * @returns All Users (Promise)
 */
export const getAll = async ():Promise<User[]> =>  {
  const users = await  getRepository(User).find();
  if(!users) throw new RequestError('Error: no users', 404)
  return users;
};
 
/**
 * Returns User by id (Promise)
 * @param id - id of user for search.
 * @returns user or error message (Promise)
 */
export const getUser = async(id:string):Promise<{
  id: string;
  name: string;
  login: string;
} | undefined>  => { 
  const user = await  getRepository(User).findOne({id});
  if(!user) throw new RequestError('Error: no user with such id', 404);
    return User.toResponse(user);
  };

/**
 * Adds the User to repository
 * @param data - user to be added.
 * @returns added user or error message (Promise)
 */
  export const addUser = async(data:IUser):Promise<{
    id: string;
    name: string;
    login: string;
} | undefined> => {
    const user =  await getRepository(User).save(data);
   if(!user) throw new RequestError('Error: can not create user', 401)
  return User.toResponse(user);
}

/**
 * Update the User in repository
 * @param id - id of the user to be updated.
 * @param data - new data for updating user
 * @returns updated user or error message (Promise)
 */
export const updateUser = async(id:string, data:IUser) => {
  const user = await  getRepository(User).findOne({id});
  if(!user) throw new RequestError('Error in updateUser: no user with such id', 404);
  user.login = data.login;
  user.name = data.name;
  user.password = data.password;
  await getRepository(User).save(user);
    return User.toResponse(user) 
}

/**
 * Delete the User in repository
 * @param id - id of the user to be deleted.
 * @returns status code (202) or error message (Promise)
 */
export const deleteUser = async(id:string):Promise<void> => {
   Boolean((await getRepository(User).delete(id)).affected);
   // Boolean((await getRepository(Task).delete(id)).affected);
   
   // tasks = null;
   // await getRepository(Task).save(tasks);
  // db[0].splice(index, 1);
  // db[2].map((item) => {
  //   if(item.userId === id){
  //     const it = item;
  //     it.userId = null;
  //   }
  //   return db[2]
  // });
  // if(index !== -1) {
  //   return 200
  // }
   // throw new RequestError('Error: error while deleting user', 404);
}


