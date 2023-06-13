import s from 'features/auth/Login/styles.module.css'
import {authThunks} from "features/auth/auth.slice";
import {useAppDispatch} from "common/components/hooks";
import {useNavigate} from "react-router-dom";


export const RecoveryPassword = () => {

    const dispatch = useAppDispatch();

    const forgotPasswordHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            from: "test from vladok1993@mail.ru",
            message: 'Click to reference to reset password'
        }

        dispatch(authThunks.forgotPassword(payload))
    }


    return <div className={s.container}>
        <h1>Forgot you Password?</h1>
        <input className={s.input} placeholder={'Email'} type={"email"}/>
        <button className={s.sign} onClick={forgotPasswordHandler}>Send Instructions</button>
        <div className={s.registration}>Try logging in</div>
    </div>
};