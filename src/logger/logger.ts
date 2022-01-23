
import {Request,Response, NextFunction} from 'express';

import winston, {createLogger, format, transports} from 'winston';
import { LOG_LVL } from '../common/config';
import appRoot from 'app-root-path';


export const logger = createLogger({
    level: LOG_LVL,
    transports: [
        new transports.File({
          filename: `${appRoot}/logs/combined.log`,
          level: LOG_LVL,
          format: format.combine(
              format.uncolorize(),
              format.json()
          )
        }),
        new transports.File({
          filename: `${appRoot}/logs/errors.log`,
          level: 'error',
          format: format.combine(
            format.uncolorize(),
            format.json()
        )
        }),
        new transports.Console({
      
          level: 'error',
          format: format.combine(
            format.colorize(),
        )
        })
      ],
  })
  


export async function logging  (req:Request, res:Response, next:NextFunction){
const {url} = req;
const params = JSON.stringify(req.params);
const body = JSON.stringify(req.body);
const query:string = JSON.stringify(req.query);
const statusCode:number = await res.statusCode;
const header = JSON.stringify(req.headers);
const log = "info";
console.log(JSON.stringify(appRoot))
const message = `[method = ${req.method}] -:- url:${url} - body:${body} -HEADER${header} `;
logger.log(log, message);
}