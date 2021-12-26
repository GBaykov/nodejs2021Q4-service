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

export function loggingErrors (err:Error | RequestError, req?:Request) {
    const {name, message, stack} = err;
    const time = (new Date().toLocaleString()).toString();
    let method;
    let body;
    let url;
    if(req) {
        method = req.method;
        body = req.body;
        url = req.url
        // {method, body, url} = req;
    }
    const errorStringForLog = `${name} = 404 - ${message} - ${time} `;
     const reqStr = undefined// `- method:${method} - body:${JSON.stringify(body)} - url:${url}`;
     if (reqStr) {
        logger.error(errorStringForLog + reqStr)
     } else logger.error(errorStringForLog)
    
    
}
export function handleErrors(err:Error, req:Request, res:Response, next:NextFunction) {
    loggingErrors(err, req);
    res.status(404).json(err.message)
}