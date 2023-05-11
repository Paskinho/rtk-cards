import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "features/auth/auth.api";


const register = createAsyncThunk('auth/register', (arg: any, thunkAPI)=> {
    const {dispatch, getState, rejectWithValue} = thunkAPI
    authApi.register().then((res)=> {

    })
})


const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
});

export const authReducer = slice.reducer;
export const authThunks = {register};

