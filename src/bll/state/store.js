import create from 'zustand'
import {generateSalt, getSalt, newTokensByRefresh, postPassword, putPassword} from "../communication/communication";
import {hashingPassword} from "./hash";
import axios from "axios";

let accessToken;
let refreshToken;

const registration = (username, password, setMessage, navigate) => {

    // let result = generateSalt(username);
    // if (result === false) {
    //     //соль не была сгенерирована на сервере. Сбой в регистрации
    // } else {
    //     let [salt, token] = result;
    //     if (putPassword(token, hashingPassword(password, salt))) {
    //         //пороль успешно добавлен на сервер
    //         authorisation(username, password);
    //     } else {
    //         //пароль не был добавлен на сервер. Сбой в регистрации
    //     }
    // }

    axios({
        method: 'post',
        url: 'http://localhost:8080/generateSalt',
        params: {
            username: 'username'
        }
    }).then((response) => {
        let salt = response.data.salt
        let token = response.data.token
        axios({
            method: 'post',
            url: 'http://localhost:8080/putPassword',
            params: {
                token: token,
                password: hashingPassword(password, salt)
            }
        }).then((response) => {
            navigate("/start/authorisation")
        }).catch((exception)=>{
            setMessage('пароль не был добавлен на сервер. Сбой в регистрации')
        })
    }).catch((exception) => {
        setMessage('соль не была сгенерирована на сервере. Сбой в регистрации')
    });
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
        registration: (username, password, setMessage, navigate) => {
            registration(username, password, setMessage, navigate)

        },
        authorisation: (username, password) => {
            authorisation(username, password)
        },

    }
))

export default useStore;