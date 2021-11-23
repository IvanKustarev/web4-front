import create from 'zustand'
import {authorisation, updateDots, registration, sendDot, signByVk, singByGoogle} from "../communication/logic";
import {connect, disconnect} from "../communication/webSocket";
import {DotType, StateType, StoreType, TokensType} from "../../types";

let store:StoreType = (set: Function) => ({
        authorized: false,
        tokens: {
            accessToken: "",
            refreshToken: ""
        },
        userId: -1,
        dots: [],
        setTokens: (tokens:TokensType) => set(() => ({
                tokens: {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken
                }
            }
        )),
        setAuthorized: (auth:boolean) => set(() => ({authorized: auth})),
        // updateDots: () => {
        //     set((state:StateType) => {
        //         updateDots(state.tokens, state.setDots)
        //     })
        // },
        //надо переписать с историей вместо навигейта
        logOut: (navigate:Function) => set((state:StateType)=>{
            state.userId = -1
            state.setTokens("", "")
            state.setAuthorized(false)
            state.listeningServer(false)
            navigate("/start")
        }),
        setDots: (dots:DotType) => set((state:StateType) => {
            console.log(dots)
            state.dots = dots
        }),
        sendDot: (dot:DotType) => set((state:StateType) => {
            sendDot(dot, state.tokens)
        }),
        registration: (username:string, password:string, setMessage:(mess:string)=>void, navigate:Function) => {
            registration(username, password, setMessage, navigate)
        },
        authorisation: (username:string, password:string, setMessage:(mess:string)=>void, navigate:Function) => set((state:StateType) => {
            authorisation(username, password, setMessage, state.setTokens, navigate, state.setUserId)
        }),
        signByVk: (navigate:Function) => set
        ((state:StateType) => {
            signByVk(state.setTokens,  state.setUserId, navigate)
        }),
        signByGoogle: (navigate:Function) => set
        ((state:StateType) => {
            singByGoogle(state.setTokens, state.setUserId, navigate)
        }),
        // listeningServer: (bool:boolean) => set((state:StateType) => {
        //     if (bool) {
        //         connect(state.updateDots, state.userId)
        //     }else {
        //         disconnect()
        //     }
        // }),
        setUserId: (userId:number) => set((state:StateType) => {
            state.userId = userId
        })
    }
)

const useStore = create(store)

export default useStore;