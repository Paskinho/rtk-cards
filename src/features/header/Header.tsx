import itIncubator from '../../assets/images/itIncubator.png'
import s from '../header/styles.module.css'
import {useNavigate} from "react-router-dom";


export const Header = () => {

    // const navigate = useNavigate()


    // const onSignHandler = () => {
    //     return navigate('/login')
    // }

    return (
        <header className={s.header}>
        <div><img className={s.img} src={itIncubator}/> </div>
            <button className={s.signHeader} >Sign In</button>
        </header>
    )

}