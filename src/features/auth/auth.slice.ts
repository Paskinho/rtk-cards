import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "features/auth/auth.api";


const register = createAsyncThunk('auth/register', (arg: ArgRegisterType) => {
    // const {dispatch, getState, rejectWithValue} = thunkAPI
    authApi.register(arg).then((res) => {
        console.log('register:', res.data)
        //res.data.addedUser
    })
})

const _login = createAsyncThunk('auth/login', (arg: ArgLoginType)=> {
   return  authApi.login(arg).then((res)=> {
        debugger

        return {profile: res.data}
    })
})

const login = createAsyncThunk('auth/login', async (arg: ArgLoginType)=> {
         const res = await authApi.login(arg);
        return {profile: res.data}
})


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null,
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(login.fulfilled,(state, action) => {
            state.profile = action.payload.profile
        })
    }
});

export const authReducer = slice.reducer;
// export const authActions = slice.actions;
export const authThunks = {register, login};

