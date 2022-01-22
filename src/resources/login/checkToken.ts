import express, {Router, Request, Response, NextFunction} from 'express';
import Jwt, {GetPublicKeyOrSecret, JwtPayload, Secret} from 'jsonwebtoken';
import { config } from '../../common/config';
import { getUser } from '../users/user.memory.repository';

const JWT_SECRET_KEY:string |undefined | Secret | GetPublicKeyOrSecret = config.JWT_SECRET_KEY;

 const checkToken = async(req:Request,res:Response,next:NextFunction)=> {
const tokenString = req.header('Authorization');

if(tokenString !== undefined) {
    const [type, token] = tokenString.split(' ');
    if(type !== 'Bearer') {
        res.status(401).send('Wrong auth schema')
    } else{
        if(!JWT_SECRET_KEY) throw new Error('JWT_SECRET_KEY is undefined');
        try{
            const res:string | JwtPayload = <JwtPayload>Jwt.verify(token, JWT_SECRET_KEY); //<JwtPayload>
            const user = await getUser(res.id);
            if(!user || user?.login !== res.login) {
                console.log('resID',res.id, 'resLogin',res.login,  )
                throw new Error()
                
            } else {
                return next()
            }
            
        } catch(err) {
            
            res.status(401).send('Unauthorized')
        }
        
    }
} else {
    res.status(401).send('Unauthorized')
}
}
export default checkToken;