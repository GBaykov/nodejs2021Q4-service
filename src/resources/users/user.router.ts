import express, {Router, Request, Response, NextFunction} from 'express';
import * as bodyParser from 'body-parser';
import User from './user.model';
import * as usersService from './user.service';
import { IUser } from '../../types';



const router: Router = express.Router();
router.use(bodyParser.text());

router.route('/').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await usersService.getAll();
    if (!users) throw new Error("NOO users")
    res.json(users.map(User.toResponse));
    // 
  } catch(err) {
    next(err)
  }
});


router
  .get('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{ 
      const { id } = req.params;
    const user = await usersService.getUser(id);
    if (!user || !id) throw new Error("NOO users or id");
    res.status(200).json(user);
    }catch(err){
      next(err)
    }  
  })

  .post('/', async (req:Request, res: Response, next:NextFunction) => {
try{
    const user: IUser | string = await usersService.addUser(req.body);
    if (!user) throw new Error("NOO users ");
    res.status(201).json(user);
  }catch(err){
    next(err)
  }  
  })

  .put('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    const user: IUser | string  = await usersService.updateUser(id, req.body);
    if (!user || !id) throw new Error("NOO users or id");
    res.status(200).json(user);
  }catch(err){
    next(err)
  } 
  })

  .delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    if ( !id) throw new Error("NOO id");
    const result:number | string = await usersService.deleteUser(id);
    res.status(200).json(result);
  }catch(err){
    next(err)
  } 
  })

export default router;
