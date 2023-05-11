import {instance} from "common/api/common.api";

export const authApi = {
    register: (arg: ArgRegisterType) => {
return instance.post('auth/register', arg )
    }
}


export type ArgRegisterType = {
    email: string,
    password: string
}

export type RegistreResponsetype = {
    addedUser: UserType
}

export type UserType = {
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
