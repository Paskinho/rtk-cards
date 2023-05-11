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