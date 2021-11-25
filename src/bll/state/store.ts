import create from 'zustand'
import {authorisation, registration, sendDot, signByVk, singByGoogle, updateTokens} from "../communication/logic";
import {disconnect} from "../communication/webSocket";
import {DotType, StateType, StoreType, TokensType} from "../../types";

const store: StoreType = (set: Function, get: Function) => ({
        _authorized: false as boolean,
        _tokens: {
            accessToken: "",
            refreshToken: ""
        },
        _userId: -1 as number,
        _dots: [],
        setUserId: (userId: number) => set((state: StateType) => ({
            _userId: userId
        })),
        getUserId: () => get()._userId,
        setTokens: (tokens: TokensType) => set((state: StateType) => ({
                _tokens: {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken
                }
            }
        )),

        getTokens: () => get()._tokens,
        setAuthorized: (auth: boolean) => set(() => ({_authorized: auth})),
        getAuthorized: () => get()._authorized,
        //надо переписать с историей вместо навигейта
        logOut: (navigate: Function) => set((state: StateType) => {
            state.setUserId(-1)
            state.setTokens({accessToken: "", refreshToken: ""})
            state.setAuthorized(false)
            disconnect()
            navigate("/start")
        }),
        setDots: (dots: Array<DotType>) => set((state: StateType) => {
            state._dots = dots
        }),
        getDots: () => get()._dots,
        sendDot: (dot: DotType) => set((state: StateType) => {
            sendDot(dot, state.getTokens(), () => {
                updateTokens(state, () => {
                    sendDot(dot, state.getTokens(), () => {
                        console.log("Проблема с отправлением точек после перезагрузки токенов")
                    })
                    // state.logOut()
                }, () => {
                    console.log("Проблема с обновлением токенов после неудачного обновления точек")
                })
                // state.logOut()
            })
        }),
        registration: (username: string, password: string, setMessage: (mess: string) => void, navigate: Function) => set((state: StateType) => {
            registration(state, username, password, setMessage, navigate)
        }),
        authorisation: (username: string, password: string, setMessage: (mess: string) => void, navigate: Function) => set((state: StateType) => {
            authorisation(state, username, password, setMessage, navigate)
        }),
        signByVk: (navigate: Function) => set
        ((state: StateType) => {
            signByVk(state, navigate)
        }),
        signByGoogle: (navigate: Function) => set
        ((state: StateType) => {
            singByGoogle(state, navigate)
        }),


        message: "",
        xErr: "",
        yErr: "",
        rErr: "",
        rParam: 1,
        // getMessage: () => get()._message,
        setMessage: (mess: string) => set((state: StateType) => ({message: mess})),
        // getXErr: () => get()._xErr,
        setXErr: (mess: string) => set((state: StateType) => ({xErr: mess})),
        // getYErr: () => get()._yErr,
        setYErr: (mess: string) => set((state: StateType) => ({yErr: mess})),
        // getRErr: () => get()._rErr,
        setRErr: (mess: string) => set((state: StateType) => ({rErr: mess})),
        setRParam: (r:number) => set((state: StateType) => ({rParam: r})),
    }
)

const useStore = create(store)

export default useStore;