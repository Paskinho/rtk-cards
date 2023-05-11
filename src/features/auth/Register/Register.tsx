import { useAppDispatch } from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'


export const Register = () => {
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        const payload = {
            email: "paskanov@mail.ru",
            password: "Paskanov9"
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