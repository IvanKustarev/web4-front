export const checkUser = (username) => {
    return true;
}

export const generateSalt = (username) => {
    return ["salt", "token"] //или false
}

export const putPassword = (token, hashPassword) => {
    //добавляет пароль для пользователя во время регистрации
    return true;
}

export const getSalt = (username) => {
    return ["salt", "token"] //или false
}

export const postPassword = (token, hashPassword) => {
    return ["accessToken", "refreshToken"] //или false
}

export const getMyDots = (accessToken) => {
    return ([/*возвращает точки в массиве*/]) //или false
}

export const newTokensByRefresh = (refreshToken) => {
    return (["accessToken", "refreshToken"])
}