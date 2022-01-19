import express, {Router, Request, Response, NextFunction} from 'express'
import * as taskService from './task.service';
import * as tasksRepo from './task.memory.repository';
import  getStatus from '../../utils/router.helpers';
import { RequestError } from '../../logger/errorHandler';

const router: Router = express.Router();

router.route('/:boardId/tasks/').get(async (req:Request, res:Response, next:NextFunction) => {
  try{
    
    const  {boardId} = req.params;
    //console.log(boardId)
    const tasks = await tasksRepo.getAll(boardId);
    if(!boardId || !tasks) throw new RequestError('NOO BOARDID or TASKS', 404)
    res.json(tasks);
  } catch(err){
    next(err)
  }
});


router
  .get('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id, boardId } = req.params;
    //console.log(id, boardId)
    const task = await tasksRepo.getTask(id, boardId);
    if(!boardId || !task || !id) throw new RequestError('NOO BOARDID or TASKS or ID', 404)
    res.status(200).json(task);
  } catch(err){
    next(err)
  }
  })

  .post('/:boardId/tasks/', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { boardId } = req.params;
    const task = await tasksRepo.addTask(req.body, boardId);
    if(!boardId || !task) throw new RequestError('NOO BOARDID or TASKS', 404)
    res.status(201).json(task);
  } catch(err){
    next(err)
  }
  })

  .put('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id, boardId } = req.params;
    //console.log(id, boardId)
    if(!boardId ) throw new RequestError('NOO BOARDID ', 404)
    if( !id) throw new RequestError('NOO BOARDID  ID', 404)
    const task = await tasksRepo.updateTask(id, req.body, boardId);
    if( !task) throw new RequestError('NOO   TASKS ', 404)
    res.status(200).json(task);
  } catch(err){
    next(err)
  }
  })
  .delete('/:boardId/tasks/:id', async (req:Request, res:Response, next:NextFunction) => {
    try{
    const { id } = req.params;
    if( !id) throw new RequestError('NOO ID', 404)
    const result = await tasksRepo.deleteTask(id);
    res.status( 204).json(result);
  } catch(err){
    next(err)
  }
  })

export default router;