import express,{Request,Response,Application, NextFunction, Express} from 'express';
import YAML = require("yamljs")
import swaggerUI, {SwaggerUiOptions} from 'swagger-ui-express'
import path from 'path';
import cors from 'cors';

import userRouter from './resources/users/user.router';
import tasksRouter from './resources/tasks/task.router';
import bordsRouter from './resources/bords/bords.router';
import loginRouter from './resources/login/login.router';
import checkToken, { checkUrl } from './resources/login/checkToken';

import {logger, logging} from './logger/logger';
import { LOG_LVL } from './common/config';
import { handleErrors, loggingErrors } from './logger/errorHandler';



 const app:Application  = express();
const swaggerDocument:SwaggerUiOptions = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req:Request, res:Response, next:NextFunction) => {
  if (req.originalUrl === '/') {
    res.send(`Service is running!`);
    return;
  }
  next();
});



app.use('/', (req:Request, res:Response, next:NextFunction) => {
  //checkUrl(req, res, next);
  logging(req, res, next);
  next();
});

app.use(checkToken)
app.use('/users', userRouter);
app.use('/boards', bordsRouter);
app.use('/boards/', tasksRouter);
app.use('/login', loginRouter);
app.use(handleErrors);

process.on('uncaughtException', (err) => {
  loggingErrors(err);
  setTimeout(() => process.exit(1), 1000);
});
// throw Error('Oops!')

process.on('unhandledRejection', (err: Error) => {
  loggingErrors(err);
  setTimeout(() => process.exit(1), 1000);
});

// Promise.reject(Error('Oops!'))
export default app;
