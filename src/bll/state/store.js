import create from 'zustand'
import {addDot, authorisation, getMyDots, registration, signByVk, singByGoogle} from "../communication/communication";

let store = (set) => ({
        authorized: false,
        tokens: null,
        setTokens: (access, refresh) => set((state) => ({
                tokens: {
                    accessToken: access,
                    refreshToken: refresh
                }
            }
        )),
        setAuthorized: (auth) => set((state) => ({authorized: auth})),
        addDot: (Dot, setMessage) => {
            addDot(Dot, setMessage)
        },
        getMyDots: (dots) => {
            getMyDots(dots)
        },
        registration: (username, password, setMessage, navigate) => {
            registration(username, password, setMessage, navigate)
        },
        authorisation: (username, password, setMessage, navigate) => {
            authorisation(username, password, setMessage, navigate)
        },
        signByVk: () => set
        ((state) => {
            signByVk(state.setTokens, state.setAuthorized)
        }),
        signByGoogle: (navigate) => set
        ((state) => {
            singByGoogle(state.setTokens, state.setAuthorized, navigate)
        })
    }
)

const useStore = create(store)

export default useStore;