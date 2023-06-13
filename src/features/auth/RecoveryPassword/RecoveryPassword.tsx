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


export const RecoveryPassword = () => {
    return <div></div>
};