import { getRepository } from 'typeorm';
//import {IUser} from '../../types';
import { RequestError } from "../../logger/errorHandler";
import { User } from '../../entities/user';

import Jwt, {Secret} from 'jsonwebtoken';
import { config } from '../../common/config';

const JWT_SECRET_KEY:string |undefined | Secret = config.JWT_SECRET_KEY;

export const getUserByProps = async(login:string, password:string):Promise< User| undefined >  => { 
    console.log(login,password)
    const user = await  getRepository(User).findOne({login, password});
    console.log("user",user)
    if(!user) throw new RequestError('Error: no user with such login/password', 404);
      return user;
    };

export const signToken = async(login:string, password:string) =>{
const user = await getUserByProps(login, password);
if(!user) {
    return null
} else {
    const {id, login} = user;
    if(!JWT_SECRET_KEY) throw new Error('JWT_SECRET_KEY is undefined');
    const token = Jwt.sign({id, login}, JWT_SECRET_KEY);
    return token;
}
}