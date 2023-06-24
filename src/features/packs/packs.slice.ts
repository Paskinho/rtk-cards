import {createSlice} from "@reduxjs/toolkit";
import {authApi, ProfileType, SetNewPasswordType} from "features/auth/auth.api";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {ArgGetPacksType, GetPacksType, packsApi} from "./packs.api";
import {thunkTryCatch} from "../../common/utils/thunkTryCatch";

const slice = createSlice({
    name: "packs",
    initialState: {
    },
    reducers: {},
});

const getPacks = createAppAsyncThunk<{ response: GetPacksType }, ArgGetPacksType> ('packs/getPacks', async (arg , thunkAPI)=> {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packsApi.getPacks(arg);
        return {response: res.data}
    });

})


export const packsReducer = slice.reducer