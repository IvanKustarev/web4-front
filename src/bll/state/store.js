import create from 'zustand'
import {addDot, authorisation, getMyDots, newTokensByRefresh, registration} from "../communication/communication";

let tokens = {
    accessToken: "",
    refreshToken: ""
}

// const updateTokens = (refreshToken) => {
//     //отправляет рефреш и получает два новых ключа. При неудаче выкидывает в окно фвторизации
//     let result = newTokensByRefresh(refreshToken);
//     if (result === false) {
//         //токены не смогли обновиться. Нужно выкинуть пользователя на экран логина
//     } else {
//         [accessToken, refreshToken] = result;
//     }
// }

const useStore = create((set) => ({
        addDot: (Dot, setMessage) => {
            addDot(Dot, tokens, setMessage)
        },
        getMyDots: (dots) => {
            getMyDots(tokens, dots)
        },
        registration: (username, password, setMessage, navigate) => {
            registration(username, password, setMessage, navigate, tokens)

        },
        authorisation: (username, password, setMessage, navigate) => {
            authorisation(username, password, setMessage, navigate, tokens)
        },

    }
))

export default useStore;