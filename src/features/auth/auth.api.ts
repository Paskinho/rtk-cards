import {instance} from "common/api/common.api";

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    forgotPassword:(arg: ArgForgotType)=> {
        return instance.post<SetNewPasswordType>('auth/forgot', arg)
    },
    resetPassword: (arg: ArgResetPassType) => {
        return instance.post<SetNewPasswordType>('auth/set-new-password', arg)
    }
}


export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type ArgForgotType = {
    email: string,
    from?: string,
    message: string
}

export type ArgResetPassType = {
    password: string
    resetPasswordToken: string
}



export type ProfileType = {
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
export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>
}

export type SetNewPasswordType = {
    info: string
    error: string
}


