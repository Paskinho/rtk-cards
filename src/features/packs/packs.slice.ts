import {createSlice} from "@reduxjs/toolkit";
import {ProfileType, SetNewPasswordType} from "features/auth/auth.api";

const slice = createSlice({
    name: "packs",
    initialState: {
    },
    reducers: {},
});


export const packsReducer = slice.reducer