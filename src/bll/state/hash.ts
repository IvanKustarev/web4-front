import md5 from 'md5-ts';
export const hashingPassword = (password:string, salt:string) => {
    return md5(password + salt)
}