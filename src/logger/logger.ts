
import {Request,Response, NextFunction} from 'express';

import winston, {createLogger, format, transports} from 'winston';
import { LOG_LVL } from '../common/config';


export const logger = createLogger({
    level: LOG_LVL,
    transports: [
        new transports.File({
          filename: 'combined.log',
          level: LOG_LVL,
          format: format.combine(
              format.uncolorize(),
              format.json()
          )
        }),
        new transports.File({
          filename: 'errors.log',
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
const log = "info";
const message = `[LEVEL = ${log}] -:- url:${url} - body:${body} - query:${query} - params:${params} - statusCode: ${statusCode}`;
logger.log(log, message);
}