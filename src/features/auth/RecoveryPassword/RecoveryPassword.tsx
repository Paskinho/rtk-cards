import s from 'features/auth/Login/styles.module.css'


export const RecoveryPassword = () => {
    return <div className={s.container}>
        <h1>Forgot you Password?</h1>
        <input className={s.input} placeholder={'Email'} type={"email"}/>
    </div>
};