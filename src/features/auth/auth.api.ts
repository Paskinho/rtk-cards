import {instance} from "common/api/common.api";
import {AxiosResponse} from "axios";

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    logout: () => { // arg: ArgLogoutType
        return instance.delete<AxiosResponse>('auth/me') // уточнить по arg был тип ProfileLogoutType
    },
    forgotPassword:(arg: ArgForgotType)=> {
        return instance.post<SetNewPasswordType>('auth/forgot', arg)
    },
    resetPassword: (arg: ArgResetPassType) => {
        return instance.post<SetNewPasswordType>('auth/set-new-password', arg)
    },
    profile: (arg: ArgProfileType) => {
      return instance.put<ProfileResponseType>('auth/me', arg)
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

export type ArgProfileType = {
    name: string,
    avatar: string,
}

export type ArgLogoutType = {

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

export type ProfileResponseType = {
    updatedUser: ProfileType
    error?: string
}

export type ProfileLogoutType = {
    info: string // "logOut success —ฅ/ᐠ.̫ .ᐟ\ฅ—"
    error: string;
}


