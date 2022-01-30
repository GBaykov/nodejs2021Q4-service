import { getRepository } from 'typeorm';
import {v4 as uuid} from 'uuid'
import express, {Router, Request, Response, NextFunction} from 'express';
import {IUser} from '../../types';
import { RequestError } from "../../logger/errorHandler";
import { User } from '../../entities/user';
import { getUserByProps } from './login.orm.repository';
import { prepareUser } from '../users/user.memory.repository';

export const addAdmin = async(req:Request,res:Response, next:NextFunction) => {
   
        const isAdmin = await getUserByProps("admin", "admin")
        if(!isAdmin) {
            const user:IUser = {    
                id:uuid(),
                name:'admin',
                login:'admin',
                password:'admin'}
            if(!user) throw new RequestError('Error in ADMIN: can not create ADMIN', 401)
         await getRepository(User).save(await prepareUser(getRepository(User).create(user)));   
         next()
        } else {
            next()  
        }
      
  // return User.toResponse(user);
}