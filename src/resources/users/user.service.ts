import * as usersRepo from './user.memory.repository';
import { IUser } from "../../types";

/**
 * Returns all Users in the repo (Promise)
 * @returns All Users (Promise)
 */
export const getAll  = () => usersRepo.getAll();

/**
 * Returns User by id (Promise)
 * @param id - id of user for search.
 * @returns user or error message (Promise)
 */
export const getUser = (id: string):Promise<undefined | IUser> => usersRepo.getUser(id);

  /**
 * Adds the User to repository
 * @param data - user to be added.
 * @returns added user or error message (Promise)
 */
export const addUser = (data: IUser):Promise<{
    id: string;
    name: string;
    login: string;
} | "Error: error while adding new user"> => usersRepo.addUser(data);

/**
 * Update the User in repository
 * @param id - id of the user to be updated.
 * @param data - new data for updating user
 * @returns updated user or error message (Promise)
 */
export const updateUser = (id: string, data: IUser):Promise<{
    id: string;
    name: string;
    login: string;
} | "Error: error while updeting user"> => usersRepo.updateUser(id, data);

/**
 * Delete the User in repository
 * @param id - id of the user to be deleted.
 * @returns status code (202) or error message (Promise)
 */
export const deleteUser = (id:string) => usersRepo.deleteUser(id);

