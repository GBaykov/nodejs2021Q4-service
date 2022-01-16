import { IUser ,DB,IBoard,ITask} from '../types';
import {createConnection, Connection, createConnections, getConnection} from "typeorm";
import { connect } from 'http2';
import configORM from './orm.config';



async function createDBconnection(): Promise<void> {
  let connection:Connection | null;
try{
 connection = await createConnection(configORM);
 if (!connection.isConnected) {
  await connection.connect();
}
//await connection.runMigrations();
console.log('DataBase has connected!');
} catch(error){
  console.log('Error while connecting to the database', error);
}
}

export async function connectToDB(func: () => void): Promise<void>{
  try{
    await createDBconnection();
    try {
      const connection = await getConnection();
      console.log('CONNECTED')
    } catch (error) {
      console.log('Connection does not exist: ', error);
    }
    func()
    } catch(err){
      console.log(err);
    }
}






const users:IUser[] = [{id: 'string',
name: 'string',
login: 'string',
password: 'string'}];

const boards:Array<IBoard>= [
  {id: 'string',
title: 'string',
columns: null,
}];

const tasks:Array<ITask> = [
  {id: 'string',
title: 'string',
order:1,
description: 'string',
userId: 'string',
boardId: 'string',
columnId: 'string',}];


   const db:DB = [
  users,
  boards,
  tasks
 ]

    export default db 
