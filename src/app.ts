import express,{Request,Response,Application, NextFunction, Express} from 'express';
import YAML = require("yamljs")
import swaggerUI, {SwaggerUiOptions} from 'swagger-ui-express'
import path from 'path';


import userRouter from './resources/users/user.router';
import tasksRouter from './resources/tasks/task.router';
import bordsRouter from './resources/bords/bords.router';
import {logger, logging} from './logger/logger';
import { LOG_LVL } from './common/config';
import { handleErrors } from './logger/errorHandler';



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
  logging(req, res, next);
  next();
});
//app.use(logging);
app.use('/users', userRouter);
app.use('/boards', bordsRouter);
app.use('/boards/', tasksRouter);
app.use(handleErrors)


export default app;
