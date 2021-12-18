
import express, {Router, Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import User from './user.model';
import * as usersService from './user.service';
import getStatus from '../../utils/router.helpers';

import { IUser } from '../../types';


const router: Router = express.Router();
router.use(bodyParser.text());

router.route('/').get(async (req:Request, res:Response) => {
  const users = await usersService.getAll()
  res.json(users.map(User.toResponse));
});


router
  .get('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const user = await usersService.getUser(id);
    res.status(getStatus(user, 200, 404)).json(user)
  })
  .post('/', async (req:Request, res: Response) => {

    const user: IUser | string = await usersService.addUser(req.body);
    res.status(getStatus(user, 201, 404)).json(user)
  })
  .put('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const user: IUser | string  = await usersService.updateUser(id, req.body)
    res.status(getStatus(user, 200, 404)).json(user)
  })
  .delete('/:id', async (req:Request, res:Response) => {
    const { id } = req.params;
    const result:number | string = await usersService.deleteUser(id)
    res.status(getStatus(result, 204, 404)).json(result)
  })

export default router;
