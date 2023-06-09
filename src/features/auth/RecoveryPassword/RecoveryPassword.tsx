import s from 'features/auth/Login/styles.module.css'
import {authThunks} from "features/auth/auth.slice";
import {useAppDispatch} from "common/components/hooks";
import {useNavigate} from "react-router-dom";
import sCommon from'../../../common/styles/styles.module.css'

export const RecoveryPassword = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const forgotPasswordHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            from: "test from vladok1993@mail.ru",
            message: 'Click to reference to reset password'
        }

        dispatch(authThunks.forgotPassword(payload))
    }


    const onLoginHandler = () => {
        return navigate('/login')
    }

    return <div className={sCommon.container}>
        <h1>Forgot you Password?</h1>
        <input className={sCommon.input} placeholder={'Email'} type={"email"}/>
        <div>Enter your email address and we will send you further instructions</div>
        <button className={s.sign} onClick={forgotPasswordHandler}>Send Instructions</button>
        <div className={sCommon.registration} onClick={onLoginHandler}>Try logging in</div>
    </div>
};