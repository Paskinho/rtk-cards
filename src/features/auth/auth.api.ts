import {instance} from "common/api/common.api";

export const authApi = {
    register: (arg: ArgRegisterType) => {
return instance.post<RegisterResponseType>('auth/register', arg )
    },
    login: (arg: ArgLoginType) => {
        return instance.post('auth/login', arg)
    }
}


export type ArgRegisterType = {
    email: string,
    password: string
}


export type ArgLoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type RegisterResponseType = {
    addedUser: UserType
}

type UserType = {
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
}

