import {instance} from "common/api/common.api";

export const authApi = {
    register: (arg: ArgRegisterType) => {
return instance.post<RegisterResponseType>('auth/register', arg )
    },
    login: (arg: ArgLoginType) => {
        return instance.post<LoginResponseType>('auth/login', arg)
    }
}



export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>


export type RegisterResponseType = {
    addedUser: UserType
}


type LoginResponseType = {
    _id: string;
    email: string;
    rememberMe: string;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string,
    tokenDeathTime: number
}

type UserType = Omit<LoginResponseType, 'token, tokenDeathTime'>

