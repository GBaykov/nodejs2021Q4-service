//1. создать логгер используя винстон, как на ролике
// 2.использовать Logger.error(msg:str) в обработчике ошибок (может try catch в роутах и app. Если ошибка - логгировать)
// 3. создать функцию логгирования, которая будет использоваться в app.use(logging), которая принимает от апп все необходимое и которая внутри себя использует логгирование - logger.info(msg)
// при это сообщение в логгере ошибок - err.message, а в info - то, что я склею из url, status и тд
// uncaughtException  unhandledRejection 
import express,{Request,Response,Application, NextFunction, Express} from 'express';

import winston, {createLogger, format, transports} from 'winston';
import { LOG_LVL } from '../common/config';

// var options = {
//     file: {
//       level: 'info',
//       filename: `${appRoot}/logs/app.log`,
//       handleExceptions: true,
//       json: true,
//       maxsize: 5242880, // 5MB
//       maxFiles: 5,
//       colorize: false,
//     },
//     console: {
//       level: 'debug',
//       handleExceptions: true,
//       json: false,
//       colorize: true,
//     },
//   };

//onst log:string = LOG_LVL || 'info';
export const logger = createLogger({
    level: LOG_LVL,
    //levels: winston.config.npm.levels,
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
        })
      ],
  })
  


export function logging(req:Request, res:Response, next:NextFunction):void{
let url = req.url;
const body = JSON.stringify(req.body);
const query:string = url.split('?')[1] || '{}';
const statusCode:number = res.statusCode;
const log:string = "info";
const message = `[${LOG_LVL} --LEVEL = ${log}] -:- url:${url} - body:${body} - query:${query} - statusCode: ${statusCode}`;
logger.log('info', message);
}