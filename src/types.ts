export type DotType = {
    id: number | null,
    x: number,
    y: number,
    r: number,
    get: boolean | null
}

export type TokensType = {
    accessToken: string,
    refreshToken: string
}

export type StoreType = (set:Function) => StateType
export type StateType = {
    authorized: boolean,
    tokens: TokensType,
    userId: number,
    dots: Array<DotType>
}
export type AuthResponseType = {
    userId: number,
    accessToken: string,
    refreshToken: string
}