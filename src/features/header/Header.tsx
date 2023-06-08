import itIncubator from '../../assets/images/itIncubator.png'
import s from '../header/styles.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
        <div><img className={s.img} src={itIncubator}/> </div>
        </header>
    )

}