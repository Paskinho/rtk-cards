import { useAppDispatch } from "app/hooks";
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
        </div>
    </form>
    );
}