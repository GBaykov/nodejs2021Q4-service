// const router = require('express').Router();
import express, {Router, Request, Response} from 'express';
import * as boardsService from './bords.service';
import getStatus from '../../utils/router.helpers';

const router: Router = express.Router();

router.route('/').get(async (req:Request, res:Response) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});


router
  .get('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const board = await boardsService.getBoard(id);
    res.status(getStatus(board, 200, 404)).json(board)
  })
  .post('/', async (req:Request, res:Response) => {
    const board = await boardsService.addBoard(req.body)
    res.status(getStatus(board, 201, 404)).json(board)
  })
  .put('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const board = await boardsService.updateBoard(id, req.body)
    res.status(getStatus(board, 200, 404)).json(board)
  })
  .delete('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const result =  boardsService.deleteBoard(id)
    res.status(getStatus(result, 204, 404)).json(result)
  })

export default router;