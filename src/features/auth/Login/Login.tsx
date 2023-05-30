import { useAppDispatch } from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'
import {useForm} from "react-hook-form";


export const Login = () => {
    const dispatch = useAppDispatch();

    const loginHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            password: "Luissuarez07",
            rememberMe: false
        }

        dispatch(authThunks.login(payload));
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
    <form  onSubmit={handleSubmit(()=> {
    })}>
        <div className={s.container}>
            <input placeholder={'Email'}/>
            <input placeholder={'password'}/>
            <h1>Login</h1>
            <button onClick={loginHandler}>login</button>
            <button onClick={forgotPasswordHandler}>Forgot Password</button>
        </div>
    </form>
    );
}