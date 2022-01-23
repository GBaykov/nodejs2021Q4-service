import * as bodyParser from 'body-parser';
import express, {Router, Request, Response, NextFunction} from 'express';
import { signToken } from './login.orm.repository';

const router:Router = express.Router();
router.use(bodyParser.text());

router.post('/', async (req, res)=>{
const {login, password}:{login:string, password:string} = req.body;
const token = await signToken(login, password);
if(!token){
    res.status(403).send('wrong login/password')
} else{
    
    res.status(200).send({token})
    //return token
    //json(token)
}
})


export default router;