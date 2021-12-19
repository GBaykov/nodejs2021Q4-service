import * as usersRepo from './user.memory.repository';
import { IUser } from "../../types";

export const getAll  = () => usersRepo.getAll();
export const getUser = (id: string):Promise<string | IUser> => usersRepo.getUser(id);
export const addUser = (data: IUser):Promise<{
    id: string;
    name: string;
    login: string;
} | "Error: error while adding new user"> => usersRepo.addUser(data);
export const updateUser = (id: string, data: IUser):Promise<{
    id: string;
    name: string;
    login: string;
} | "Error: error while updeting user"> => usersRepo.updateUser(id, data);
export const deleteUser = (id:string) => usersRepo.deleteUser(id);

