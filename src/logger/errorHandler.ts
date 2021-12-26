import express,{Request,Response,Application, NextFunction, Express} from 'express';
import { logger } from './logger';

function loggingErrors (err:Error, req:Request) {
    const {name, message, stack} = err;
    const time = (new Date().toLocaleString()).toString()
    const {method, body, url} = req;
    const errorStringForLog = `ERROR status code = 404 - ${message} - ${time} - ${req.method} - ${JSON.stringify(body)} - ${url}`;
    logger.error(errorStringForLog)
}
export function handleErrors(err:Error, req:Request, res:Response, next:NextFunction) {
    loggingErrors(err, req);
    res.status(404).json(err.message)
}