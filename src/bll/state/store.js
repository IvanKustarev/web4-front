import create from 'zustand'
import {generateSalt, getSalt, postPassword, putPassword, newTokensByRefresh} from "../communication/communication";
import {hashingPassword} from "./hash";

let accessToken;
let refreshToken;

const registration = (username, password) => {
    let result = generateSalt(username);
    if (result === false) {
        //соль не была сгенерирована на сервере. Сбой в регистрации
    } else {
        let [salt, token] = result;
        if (putPassword(token, hashingPassword(password, salt))) {
            //пороль успешно добавлен на сервер
            authorisation(username, password);
        } else {
            //пароль не был добавлен на сервер. Сбой в регистрации
        }
    }
}
const authorisation = (username, password) => {
    let result = getSalt(username);
    if (result === false) {
        //проблемы с получением соли от сервера. Сбой авторизации
    } else {
        let [salt, token] = result;
        result = postPassword(token, hashingPassword(password, salt));
        if (result === true) {
            [accessToken, refreshToken] = result;
        }
    }
}
const addDot = (dot, accessToken) => {
    return true; // если точка валидна и успешно добавлена на сервере
}

const updateTokens = (refreshToken) => {
    //отправляет рефреш и получает два новых ключа. При неудаче выкидывает в окно фвторизации
    let result = newTokensByRefresh(refreshToken);
    if (result === false) {
        //токены не смогли обновиться. Нужно выкинуть пользователя на экран логина
    } else {
        [accessToken, refreshToken] = result;
    }
}

const useStore = create((set) => ({
        dots: [],
        addDot: (dot) => {
            if (addDot(dot, accessToken)) {
                //точка попала в область
                set((state) => ({
                        dots: [...(state.dots), dot]
                    }
                ))
            } else {
                //должно быть что-то что говори о том, что точка не попала
            }
        },
        registration: (username, password) => {
            registration(username, password)
        },
        authorisation: (username, password) => {
            authorisation(username, password)
        },

    }
))

export default useStore;