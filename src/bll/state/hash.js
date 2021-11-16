export const hashingPassword = (password, salt) => {
    return password + salt
}