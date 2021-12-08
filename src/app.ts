
import {Request,Response,Application, NextFunction, Express} from 'express';

const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const express = require ('express')
const userRouter = require('./resources/users/user.router');
const bordsRouter = require('./resources/bords/bords.router');
const tasksRouter = require('./resources/tasks/task.router');


 const app:Application  = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req:Request, res:Response, next:NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', bordsRouter);
app.use('/boards/', tasksRouter);

export default app;
