import { useAppDispatch } from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Login/styles.module.css'
import sCommon from'../../../common/styles/styles.module.css'
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import {doc} from "prettier";
import label = doc.builders.label;
import {FormControlLabel} from "@mui/material";


export const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const loginHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            password: "Luissuarez07",
            rememberMe: false
        }
        dispatch(authThunks.login(payload))
            .unwrap()
            .then((res)=> {
            toast.success('Successfully login')
            // setTimeout(()=> {
            //     navigate('/')
            // }, 1000)
        }).catch((err)=> {
            toast.error(err.e.response.data.error)
        });
    };

    const forgotPasswordHandler = () => {
          return navigate('/recovery')
    }



    const {register, handleSubmit} = useForm({
        // validate: (values)=> {
        //
        // }
    });



    return (
    <form   onSubmit={handleSubmit(()=> {
    })}>
        <div className={sCommon.container}>
            <h1>Sign in</h1>
            <label className={sCommon.label}>Email</label>
            <input className={sCommon.input} placeholder={'Email'} type={"email"}/>
            <label className={sCommon.label}>Password</label>
            <input className={sCommon.input} placeholder={'password'} type={"password"}/>
            <FormControlLabel className={sCommon.checkbox} control={<Checkbox defaultChecked />} label="Remember Me" />
            <div className={s.forgot} onClick={forgotPasswordHandler}>Forgot Password?</div>
            <button className={s.sign} onClick={loginHandler}>Sign In</button>
            <div className={sCommon.registration}>Don't have an account?</div>
        </div>
    </form>
    );
}