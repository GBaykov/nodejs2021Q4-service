import express,{Request,Response,Application, NextFunction, Express} from 'express';
import { logger } from './logger';

export class RequestError extends Error {
    public status: number;
    public message: string;
    constructor( message:string, status:number){ 
        super(message)
        this.name = "Request Error";
        this.message = message || 'Server Error!';
        this.status = status || 404;
    }
    
}

function loggingErrors (err:Error | RequestError, req:Request) {
    const {name, message, stack} = err;
    const time = (new Date().toLocaleString()).toString()
    const {method, body, url} = req;
    const errorStringForLog = `${name} = 404 - ${message} - ${time} - method:${method} - body:${JSON.stringify(body)} - url:${url}`;
    logger.error(errorStringForLog)
}
export function handleErrors(err:Error, req:Request, res:Response, next:NextFunction) {
    loggingErrors(err, req);
    res.status(404).json(err.message)
}