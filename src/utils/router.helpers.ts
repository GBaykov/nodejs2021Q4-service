
function getStatus(entity:string | number, successCode:number, errCode:number):number{
    if(typeof entity !== "string") {
        return successCode
     } return errCode;
}


module.exports = { getStatus }