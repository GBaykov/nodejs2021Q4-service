import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});


const levels:string[] = ["error", "warn", "info"]
  
const level:number = process.env.LOG_LVL !== undefined 
                     && +process.env.LOG_LVL < 3 ?  
                     Number(process.env.LOG_LVL) : 2;
 
const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true'
};
export const LOG_LVL = levels[level]

export const {PORT} = process.env;
