import {createSlice} from "@reduxjs/toolkit";
import {
    ArgForgotType,
    ArgLoginType,
    ArgRegisterType, ArgResetPassType,
    authApi,
    ProfileType,
    SetNewPasswordType
} from "features/auth/auth.api";
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";


const register = createAppAsyncThunk<void, ArgRegisterType>
('auth/register', async (arg) => {
    await authApi.register(arg)
});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
('auth/login', async (arg) => {
    const res = await authApi.login(arg);
    return {profile: res.data}
});

const forgotPassword = createAppAsyncThunk<{password: SetNewPasswordType}, ArgForgotType>('auth/forgotPassword',async (arg, thunkAPI)=> {
    const res = await authApi.forgotPassword(arg)
    return {password: res.data}
})

const resetPassword = createAppAsyncThunk<{password: SetNewPasswordType}, ArgResetPassType>('auth/newPassword',async (arg, thunkAPI)=> {
    const res = await authApi.resetPassword(arg)
    return {password: res.data}
})


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null,
        password: null as SetNewPasswordType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profile
        })
    }
});

export const authReducer = slice.reducer;
export const authThunks = {register, login, forgotPassword};

