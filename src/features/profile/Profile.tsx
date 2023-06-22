import {useAppDispatch} from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";
import sCommon from '../../common/styles/styles.module.css'
import s from 'features/profile/styles.module.css'
import ProfilePhoto from '../../assets/images/Profile.jpg'
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();


    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState()

    const onSubmit = (data: any) => {
        setEditMode(false)
        dispatch(authThunks.setProfile({name: data.newName}))
    }


    const logoutHandler = () => {
        dispatch(authThunks.logout())
            .unwrap()
            .then(() => {
                navigate("/login");
            });;
    }

    const changeName = (e:any) => {
        setName(e.currentTarget.value)

    };


    // dispatch(authThunks.profile)
    return (
        <div className={sCommon.container}>
            <h1>Personal Information</h1>
            <img className={s.profilePhoto} src={ProfilePhoto}/>
            {!editMode &&
            <span className={s.changeName} onChange={changeName}>Uladsislau</span>}
            <div>v.paskanov@gmail.com</div>
            <button onClick={logoutHandler} className={s.logout}>LogOut</button>
        </div>
    )
}