import {v4 as uuid} from 'uuid'
import { IUser } from '../../types';


class User implements IUser{
  
  id:string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }:IUser) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
/**
 * Return User without password for response
 * @param user - User with params to be modified for Respons
 * @returns User without password
 */
  static toResponse(user:IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
