import {instance} from "common/api/common.api";

export const authApi = {
    register: () => {
        const payload: any = {
            email: "nya-admin@nya.nya",
            password: "1qazxcvBG"
        }
return instance.post('auth/register', payload )
    }
}