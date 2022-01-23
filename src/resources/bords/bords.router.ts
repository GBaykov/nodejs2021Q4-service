import express, {Router, Request, Response, NextFunction} from 'express';

import * as boardsRepo from './bords.memory.repository';

import { RequestError } from '../../logger/errorHandler';

const router: Router = express.Router();

router.route('/').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
  const boards = await boardsRepo.getAll();
  res.json(boards);
  }catch(err){
    next(err)
  }
});


router
  .get('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const { id } = req.params;
    const board = await boardsRepo.getBoard(id);
    console.log('boardID', id)
    console.log('board', board)
    if(!id || !board) throw new RequestError(' NOOOOOO ID or BOARD',404)
    res.status(200).json(board)
    }catch(err){
      next(err)
    }
  })

  .post('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const board = await boardsRepo.addBoard(req.body);
    if( !board) throw new RequestError(' NOOOOOO board ',404)
    res.status(201).json(board)
    }catch(err){
      next(err)
    }
  })
  .put('/:id', async (req:Request, res:Response, next:NextFunction) => {
   try {
    const { id } = req.params;
    const board = await boardsRepo.updateBoard(id, req.body);
    if(!id || !board) throw new RequestError(' NOOOOOO ID or BOARD',404)
    res.status(200).json(board)
   } catch(err){
     next(err)
   }
  })
  .delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
    try {
    const { id } = req.params;
    const result = await boardsRepo.deleteBoard(id);
    res.status(204).json(result)
    }catch(err){
      next(err)
    }
  })

export default router;