import { useAppDispatch } from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Login/styles.module.css'
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
          const payload = {
              email: "v.paskanov@gmail.com",
              from: "test from vladok1993@mail.ru",
              message: 'Click to reference to reset password'
          }

          dispatch(authThunks.forgotPassword(payload))
    }



    const {register, handleSubmit} = useForm({
        // validate: (values)=> {
        //
        // }
    });



    return (
    <form   onSubmit={handleSubmit(()=> {
    })}>
        <div className={s.container}>
            <h1>Sign in</h1>
            <input placeholder={'Email'}/>
            <input placeholder={'password'} type={"password"}/>
            <button onClick={forgotPasswordHandler}>Forgot Password</button>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            <button className={s.sign} onClick={loginHandler}>Sign In</button>
        </div>
    </form>
    );
}