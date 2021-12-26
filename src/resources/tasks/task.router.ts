import express, {Router, Request, Response, NextFunction} from 'express'
import * as taskService from './task.service';
import  getStatus from '../../utils/router.helpers';

const router: Router = express.Router();

router.route('/:boardId/tasks/').get(async (req:Request, res:Response, next:NextFunction) => {
  try{
    const  {boardId} = req.params;
    const tasks = await taskService.getAll(boardId);
    res.json(tasks);
  } catch(err){
    next(err)
  }
});


router
  .get('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id, boardId } = req.params;
    const task = await taskService.getTask(id, boardId);
    res.status(200).json(task);
  } catch(err){
    next(err)
  }
  })

  .post('/:boardId/tasks/', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { boardId } = req.params;
    const task = await taskService.addTask(req.body, boardId);
    res.status(201).json(task);
  } catch(err){
    next(err)
  }
  })

  .put('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id, boardId } = req.params;
    const task = await taskService.updateTask(id, req.body, boardId);
    res.status(200).json(task);
  } catch(err){
    next(err)
  }
  })
  .delete('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    const result = await taskService.deleteTask(id);
    res.status( 204).json(result);
  } catch(err){
    next(err)
  }
  })

export default router;