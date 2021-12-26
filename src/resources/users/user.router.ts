import express, {Router, Request, Response, NextFunction} from 'express';
import * as bodyParser from 'body-parser';
import User from './user.model';
import * as usersService from './user.service';
import getStatus from '../../utils/router.helpers';

import { IUser } from '../../types';
//import { NextFunction } from 'express';


const router: Router = express.Router();
router.use(bodyParser.text());

router.route('/').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await usersService.getAll()
    res.json(users.map(User.toResponse));
    //throw new Error("MY OWN ERROR")
  } catch(err) {
    next(err)
  }
});


router
  .get('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{ 
      const { id } = req.params;
    const user = await usersService.getUser(id);
    res.status(200).json(user);
    }catch(err){
      next(err)
    }  
  })

  .post('/', async (req:Request, res: Response, next:NextFunction) => {
try{
    const user: IUser | string = await usersService.addUser(req.body);
    res.status(getStatus(user, 201, 404)).json(user);
  }catch(err){
    next(err)
  }  
  })

  .put('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    const user: IUser | string  = await usersService.updateUser(id, req.body);
    res.status(200).json(user);
  }catch(err){
    next(err)
  } 
  })

  .delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    const result:number | string = await usersService.deleteUser(id);
    res.status(200).json(result);
  }catch(err){
    next(err)
  } 
  })

export default router;
