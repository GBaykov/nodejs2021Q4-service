// Define "require"


import {Request,Response,Application, NextFunction, Express} from 'express';


import YAML = require("yamljs")
import swaggerUI, {SwaggerUiOptions} from 'swagger-ui-express'
import path from 'path';

// const YAML = require('yamljs');
const express = require ('express')
const userRouter = require('./resources/users/user.router');
const bordsRouter = require('./resources/bords/bords.router');
const tasksRouter = require('./resources/tasks/task.router');



 const app:Application  = express();
const swaggerDocument:SwaggerUiOptions = YAML.load(path.join(__dirname, '../doc/api.yaml'));

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
