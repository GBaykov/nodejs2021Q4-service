import bcrypt from 'bcrypt';

export async function encryptPassword(password:string){
    const saltRounds = 10;
const hash:string | undefined = await bcrypt.hash(password, saltRounds);
return hash;
}
export async function checkHashPassword(password:string, hash:string) {
    const bo=  await bcrypt.compare(password, hash);
    return bo;
}