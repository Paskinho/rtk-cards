
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'
import {useAppDispatch} from "common/components/hooks";
import {useEffect} from "react";
import {unhandleAction} from "common/actions/unhandle.action";


export const Register = () => {
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(unhandleAction())
    },[])

    const registerHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            password: "Luissuarez_07",
        }

        dispatch(authThunks.register(payload));
    };

    return (
        <div className={s.container}>
            <h1>Register</h1>
            <button onClick={registerHandler}>register</button>
        </div>
    );
}