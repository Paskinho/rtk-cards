import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArgRegisterType, authApi} from "features/auth/auth.api";


const register = createAsyncThunk('auth/register', (arg: ArgRegisterType) => {
    // const {dispatch, getState, rejectWithValue} = thunkAPI
    authApi.register(arg).then((res) => {
        console.log('register:', res.data)
        //res.data.addedUser
    })
})


const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
});

export const authReducer = slice.reducer;
export const authThunks = {register};

