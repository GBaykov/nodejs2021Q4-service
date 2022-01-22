import * as bodyParser from 'body-parser';
import express, {Router, Request, Response, NextFunction} from 'express';

const router:Router = express.Router();
router.use(bodyParser.text());


export default router;