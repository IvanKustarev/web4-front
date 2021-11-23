import create from 'zustand'
import {authorisation, updateDots, registration, sendDot, signByVk, singByGoogle} from "../communication/communication";
import {connect, disconnect} from "../communication/webSocket";

let store = (set) => ({
        authorized: false,
        tokens: null,
        userId: -1,
        setTokens: (access, refresh) => set((state) => ({
                tokens: {
                    accessToken: access,
                    refreshToken: refresh
                }
            }
        )),
        setAuthorized: (auth) => set((state) => ({authorized: auth})),
        dots: [],
        updateDots: () => {
            set((state) => {
                updateDots(state.tokens, state.setDots)
            })
        },
        logOut: (navigate) => set((state)=>{
            state.userId = -1
            state.setTokens("", "")
            state.setAuthorized(false)
            state.listeningServer(false)
            navigate("/start")
        }),
        logIn: (navigate) => set((state)=>{
            if (!state.authorized) {
                navigate('/start')
            }
            state.listeningServer(true)
            state.updateDots()
        }),
        setDots: (dots) => set((state) => {
            console.log(dots)
            state.dots = dots
        }),
        sendDot: (dot) => set((state) => {
            sendDot(dot, state.tokens)
        }),
        registration: (username, password, setMessage, navigate) => {
            registration(username, password, setMessage, navigate)
        },
        authorisation: (username, password, setMessage, navigate) => set((state) => {
            authorisation(username, password, setMessage, state.setTokens, navigate, state.setUserId)
        }),
        signByVk: (navigate) => set
        ((state) => {
            signByVk(state.setTokens, state.setAuthorized, state.setUserId, navigate)
        }),
        signByGoogle: (navigate) => set
        ((state) => {
            singByGoogle(state.setTokens, state.setAuthorized, state.setUserId, navigate)
        }),
        listeningServer: (bool) => set((state) => {
            if (bool) {
                connect(state.updateDots, state.userId)
            }else {
                disconnect()
            }
        }),
        setUserId: (userId) => set((state) => {
            state.userId = userId
        })
    }
)

const useStore = create(store)

export default useStore;