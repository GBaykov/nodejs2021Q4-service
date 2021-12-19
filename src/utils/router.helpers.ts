import { IBoard, ITask, IUser } from "../types";

/**
 * Return status code
 * @param entity - entity for checking what status code to return
 * @param successCode - status code for successful operation
 * @param errCode - status code for some error
 * @returns successCode or errCode
 */
export default function getStatus(entity: Promise<number | string> | string | number | IUser | ITask | IBoard, successCode:number, errCode:number):number{
    if(typeof entity !== "string") {
        return successCode
     } return errCode;
}

