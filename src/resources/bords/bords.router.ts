import express, {Router, Request, Response, NextFunction} from 'express';
import * as boardsService from './bords.service';
import getStatus from '../../utils/router.helpers';
import { RequestError } from '../../logger/errorHandler';

const router: Router = express.Router();

router.route('/').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
  const boards = await boardsService.getAll();
  res.json(boards);
  }catch(err){
    next(err)
  }
});


router
  .get('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const { id } = req.params;
    if(!id) throw new RequestError('ID NOOOOOO',404)
    const board = await boardsService.getBoard(id);
    res.status(200).json(board)
    }catch(err){
      next(err)
    }
  })

  .post('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const board = await boardsService.addBoard(req.body)
    res.status(201).json(board)
    }catch(err){
      next(err)
    }
  })
  .put('/:id', async (req:Request, res:Response, next:NextFunction) => {
   try {
    const { id } = req.params;
    const board = await boardsService.updateBoard(id, req.body)
    res.status(200).json(board)
   } catch(err){
     next(err)
   }
  })
  .delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const { id } = req.params;
    if(!id) throw new RequestError('Error from router: id is absent', 404);
    const result =  boardsService.deleteBoard(id);
    if(!result) throw new RequestError('Error from router: error while deleting board', 404);
    res.status(204).json(result)
    }catch(err){
      next(err)
    }
  })

export default router;