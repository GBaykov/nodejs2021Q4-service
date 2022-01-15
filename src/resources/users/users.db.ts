import { RequestError } from "../../logger/errorHandler";
import { IUser } from "../../types";
import User from "./user.model";

export class USERS_DB {
    _db: IUser[];
    constructor(){
        this._db = [];
    }

     findMany(){
        return this._db;
    }

    findOne(id:string): IUser | undefined{
        return this._db.find(user => user.id === id)
    }

    create(dto:IUser):IUser | undefined{
      const newUser = new User(dto);
      return User.toResponse(newUser)
    }

    update(id:string, dto:IUser): IUser | undefined | 'NOT_FOUND' {   //МАГИЯ??
        let user =  this.findOne(id); 
        if(user) {
            user = {...dto, ...user}
        } else{
            throw new RequestError('Error in updateUser: no user with such id', 404)
           // return 'NOT_FOUND'
        }
        return User.toResponse(user)
         //const newUser = new User(dto);
        // newUser.id = id;
        // const index =  this._db.findIndex(item => item.id === id);
        // this._db.splice(index, 1, newUser);
        // return User.toResponse(newUser); 

    }
    delete(id:string):void{
        this._db = this._db.filter(user => user.id !== id)
        //TO DO - добавить удаление студента с доски
    }

    save(user:IUser):void{
        this._db.push(user)
    }
}

export const UsersDB = new USERS_DB()