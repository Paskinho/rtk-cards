import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "features/auth/auth.api";


const register = createAsyncThunk('auth/register', (arg: ArgRegisterType) => {
    // const {dispatch, getState, rejectWithValue} = thunkAPI
    authApi.register(arg).then((res) => {
        console.log('register:', res.data)
        //res.data.addedUser
    })
})

const login = createAsyncThunk('auth/login', (arg: ArgLoginType)=> {
    authApi.login(arg).then((res)=> {
        console.log('login', res.data)
    })
})


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null,
    },
    reducers: {
        setProfile: (state, action: PayloadAction<{profile: ProfileType}>)=> {
            state.profile = action.payload.profile
        }
    },
});

export const authReducer = slice.reducer;
export const authThunks = {register, login};

