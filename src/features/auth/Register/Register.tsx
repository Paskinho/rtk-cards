
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'
import {useAppDispatch} from "common/components/hooks";


export const Register = () => {
    const dispatch = useAppDispatch();

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