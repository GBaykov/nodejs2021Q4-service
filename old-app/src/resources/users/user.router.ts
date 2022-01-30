import express, {Router, Request, Response, NextFunction} from 'express';
import * as bodyParser from 'body-parser';
import { StatusCodes} from 'http-status-codes';
import User from './user.model';
import * as usersRepo from './user.memory.repository';

const { OK, CREATED, NOT_FOUND, BAD_REQUEST, NO_CONTENT } = StatusCodes


const router: Router = express.Router();
router.use(bodyParser.text());

router.route('/').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await usersRepo.getAll();
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
    const user = await usersRepo.getUser(id);
    if (!user || !id) throw new Error("NOO users or id");
    res.status(200).json(User.toResponse(user));
    }catch(err){
      next(err)
    }  
  })

  .post('/', async (req:Request, res: Response, next:NextFunction) => {
try{
    const user= await usersRepo.addUser(req.body);
    if (!user) throw new Error("NOO users ");
    res.status(201).json(user);
  }catch(err){
    next(err)
  }  
  })

  .put('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    const user  = await usersRepo.updateUser(id, req.body);
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
    const result = await usersRepo.deleteUser(id);
    res.status(200).json(result);
  }catch(err){
    next(err)
  } 
  })

export default router;