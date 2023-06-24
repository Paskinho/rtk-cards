import {createSlice} from "@reduxjs/toolkit";
import {authApi, ProfileType, SetNewPasswordType} from "features/auth/auth.api";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {packsApi} from "./packs.api";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";

const slice = createSlice({
    name: "packs",
    initialState: {
    },
    reducers: {},
});

const getPacks = createAppAsyncThunk ('packs/getPacks', async (arg , thunkAPI)=> {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packsApi.getPacks(arg);
    });

})


export const packsReducer = slice.reducer