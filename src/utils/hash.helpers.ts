import bcrypt from 'bcrypt';

export async function encryptPassword(password:string){
    const saltRounds:number = 10;
const hash:string | undefined = await bcrypt.hash(password, saltRounds);
return hash;
}
export async function checkHashPassword(password:string, hash:string) {
    return await bcrypt.compare(password, hash)
}