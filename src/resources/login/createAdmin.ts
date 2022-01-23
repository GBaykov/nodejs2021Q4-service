import { getRepository } from 'typeorm';
import {IUser} from '../../types';
import { RequestError } from "../../logger/errorHandler";
import {v4 as uuid} from 'uuid'
import { User } from '../../entities/user';
import express, {Router, Request, Response, NextFunction} from 'express';
import { getUserByProps } from './login.orm.repository';

export const addAdmin = async(req:Request,res:Response, next:NextFunction) => {
   
        const isAdmin = await getUserByProps("admin", "admin")
        if(!isAdmin) {
            const user:IUser = {    
                id:uuid(),
                name:'admin',
                login:'admin',
                password:'admin'}
            if(!user) throw new RequestError('Error in ADMIN: can not create ADMIN', 401)
         await getRepository(User).save(user);   
         next()
        } else {
            next()  
        }
      
  //return User.toResponse(user);
}