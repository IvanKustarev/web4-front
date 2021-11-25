import {authorisation, registration, signByVk, singByGoogle} from "./bll/communication/logic";

export type DotType = {
    id?: number,
    x: number,
    y: number,
    r: number,
    get?: boolean
}

export type TokensType = {
    accessToken: string
    refreshToken: string
}

export type StoreType = (set: Function, get: Function) => StateType
export type StateType = {
    _authorized: boolean
    _tokens: TokensType
    _userId: number
    _dots: Array<DotType>

    setTokens: (tokens: TokensType) => void
    getTokens: () => TokensType
    setUserId: (userId: number) => void
    getUserId: () => number
    setAuthorized: (bool: boolean) => void
    getAuthorized: () => boolean
    setDots: (dots: Array<DotType>) => void
    getDots: () => Array<DotType>
    logOut: (navigate: Function) => void

    sendDot: (dot: DotType) => void
    authorisation: (username: string, password: string, setMessage: (mess: string) => void, navigate: Function) => void
    registration: (username: string, password: string, setMessage: (mess: string) => void, navigate: Function) => void

    signByVk: (navigate: Function) => void
    signByGoogle: (navigate: Function) => void

    message:string,
    xErr:string,
    yErr:string,
    rErr:string,
    rParam:number,
    // getMessage:()=>string
    setMessage:(mess:string)=>void
    // getXErr:()=>string
    setXErr:(mess:string)=>void
    // getYErr:()=>string
    setYErr:(mess:string)=>void
    // getRErr:()=>string
    setRErr:(mess:string)=>void
    setRParam:(r:number)=>void
}

export type AuthResponseType = {
    userId: number,
    accessToken: string,
    refreshToken: string
}

/*export type StateMethods = {
    setTokens: (tokens: TokensType) => void
    getTokens: ()=>TokensType
    setUserId: (userId: number) => void
    getUserId: ()=>number
    setAuthorized: (bool: boolean) => void
    getAuthorized: ()=>boolean
    setDots: (dots:Array<DotType>) => void
    getDots: ()=>Array<DotType>
    logOut: (navigate:Function) => void
    getStateGettersSetters: ()=>StateMethods
}*/
