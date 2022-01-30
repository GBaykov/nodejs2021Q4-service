import { getRepository } from 'typeorm';
// import {IUser} from '../../types';
import Jwt, {Secret} from 'jsonwebtoken';
import { RequestError } from "../../logger/errorHandler";
import { User } from '../../entities/user';

import { config } from '../../common/config';
import { checkHashPassword } from '../../utils/hash.helpers';

const {JWT_SECRET_KEY} = config;

export const getUserByProps = async(login:string, password:string):Promise< User| undefined >  => { 
    const user = await  getRepository(User).findOne({login});
    // if(!user) throw new RequestError('Error: no user with such login/password', 404);
      return user;
    };
    
export const signToken = async(log:string, password:string) =>{
const user = await getUserByProps(log, password);

if(!user) {
    return null
} 
    if(!checkHashPassword(password, user.password)) throw new RequestError('incorrect password', 401)
    const {id, login} = user;
    if(!JWT_SECRET_KEY) throw new Error('JWT_SECRET_KEY is undefined');
    const token = Jwt.sign({id, login}, JWT_SECRET_KEY);
    return token;

}