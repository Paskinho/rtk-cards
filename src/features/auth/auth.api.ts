import {instance} from "common/api/common.api";

export const authApi = {
    register: () => {
        const payload = {
            email: "nya-admin@nya.nya",
            password: "1qazxcvBG"
        }
return instance.post('auth/register', payload )
    }
}