import express, {Router, Request, Response, NextFunction} from 'express';
import Jwt, {GetPublicKeyOrSecret, JwtPayload, Secret} from 'jsonwebtoken';
import { config } from '../../common/config';
import { checkHashPassword } from '../../utils/hash.helpers';
import { getUser } from '../users/user.memory.repository';

const {JWT_SECRET_KEY} = config;

const PATHS_WITHOUT_AUTH = ['/login', '/doc', '/'];

 const checkToken = async(req:Request,res:Response,next:NextFunction)=> {
    if(!PATHS_WITHOUT_AUTH.includes(req.url)){
 
const tokenString = req.header('Authorization');
if(tokenString !== undefined) {
    const [type, token] = tokenString.split(' ');
    if(type !== 'Bearer') {
        res.status(401).send('Wrong auth schema')
    } else{
        if(!JWT_SECRET_KEY) throw new Error('JWT_SECRET_KEY is undefined');
        try{
            const resp:string | JwtPayload = <JwtPayload>Jwt.verify(token, JWT_SECRET_KEY); // <JwtPayload>
            const user = await getUser(resp.id);
            
            if(!user || user?.login !== resp.login) {
                console.log('resID',resp.id, 'resLogin',resp.login,  )
                throw new Error()
                
            } else {
                 next()
            }
            
        } catch(err) {
            
            res.status(401).send('Unauthorized')
        }
        
    }
} else {
    res.status(401).send('Unauthorized')
}
      } else {
        console.log(req.url)
         next()
      }

}
export default checkToken;