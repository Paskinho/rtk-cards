import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'
import sCommon from'../../../common/styles/styles.module.css'
import {useAppDispatch} from "common/components/hooks";
import {useEffect} from "react";
import {unhandleAction} from "common/actions/unhandle.action";
import {FormControlLabel} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useNavigate} from "react-router-dom";


export const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const sigIn = () => {
        return navigate('/login')
    }

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
            <form >
                <div className={sCommon.container}>
                    <h1>Sign up</h1>
                    <label className={sCommon.label}>Email</label>
                    <input className={sCommon.input} placeholder={'Email'} type={"email"}/>
                    <label className={sCommon.label}>Password</label>
                    <input className={sCommon.input} placeholder={'password'} type={"password"}/>
                    <label className={sCommon.label}>Confirm password</label>
                    <input className={sCommon.input} placeholder={'confirm password'} type={"password"}/>
                    <button onClick={registerHandler}>Sign Up</button>
                    <div className={sCommon.registration}>Already have an account?</div>
                    <div className={s.signIn} onClick={sigIn}>Sign In</div>
                </div>
            </form>
    );
}