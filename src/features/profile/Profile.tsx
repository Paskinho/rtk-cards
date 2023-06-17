import { useAppDispatch } from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";
import sCommon from'../../common/styles/styles.module.css'
import ProfilePhoto from '../../assets/images/Profile.jpg'

export const Profile = () => {
    const dispatch = useAppDispatch()

    // dispatch(authThunks.profile)
    return (
        <div className={sCommon.container}>
            <h1>Personal Information</h1>
            <img src={ProfilePhoto}/>
        </div>
    )
}