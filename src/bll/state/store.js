import create from 'zustand'
import {generateSalt, getSalt, postPassword, putPassword} from "../communication/communication";
import {hashingPassword} from "./hash";

let accessToken;
let refreshToken;

const registration = (username, password) => {
    let [salt, token] = generateSalt(username);
    putPassword(token, hashingPassword(password, salt));
    authorisation(username, password);
}
const authorisation = (username, password) => {
    let [salt, token] = getSalt(username);
    [accessToken, refreshToken] = postPassword(token, hashingPassword(password, salt));
}

const useStore = create((set) => ({
        dots: [],
        addDot: (dot) => set((state) => ({
            dots: [...(state.dots), dot]
        })),
        registration : (username, password) => {registration(username, password)},
        authorisation : (username, password) => {authorisation(username, password)}
    }
))

export default useStore;