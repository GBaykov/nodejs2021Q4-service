import { IBoard, ITask, IUser } from "../types";

export default function getStatus(entity: Promise<number | string> | string | number | IUser | ITask | IBoard, successCode:number, errCode:number):number{
    if(typeof entity !== "string") {
        return successCode
     } return errCode;
}

