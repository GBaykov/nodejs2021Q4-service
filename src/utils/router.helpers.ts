import { IUser } from "../types";

export default function getStatus(entity:string | number | IUser, successCode:number, errCode:number):number{
    if(typeof entity !== "string") {
        return successCode
     } return errCode;
}

