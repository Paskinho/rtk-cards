import { useAppDispatch } from "common/components/hooks";
import {authThunks} from "features/auth/auth.slice";


export const Profile = () => {
    const dispatch = useAppDispatch()

    // dispatch(authThunks.profile)
    return (
        <div>
            Profile
        </div>
    )
}