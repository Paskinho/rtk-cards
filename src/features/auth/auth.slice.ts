import {createSlice} from "@reduxjs/toolkit";
import {
    ArgForgotType,
    ArgLoginType, ArgProfileType,
    ArgRegisterType, ArgResetPassType,
    authApi,
    ProfileType,
    SetNewPasswordType
} from "features/auth/auth.api";
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {appActions} from "app/app.slice";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {thunkTryCatch} from "common/utils/thunkTryCatch";


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

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
('auth/login', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await authApi.login(arg);
        return {profile: res.data}
    })
})


const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg: ArgRegisterType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await authApi.register(arg);
        console.log("register", res);
    });
});


const forgotPassword = createAppAsyncThunk<{ password: SetNewPasswordType }, ArgForgotType>('auth/forgotPassword', async (arg, thunkAPI) => {
    const res = await authApi.forgotPassword(arg)
    return {password: res.data}
})

const resetPassword = createAppAsyncThunk<{ password: SetNewPasswordType }, ArgResetPassType>('auth/newPassword', async (arg, thunkAPI) => {
    const res = await authApi.resetPassword(arg)
    return {password: res.data}
})

// const newProfile = createAppAsyncThunk<{profile: ProfileType}, ArgProfileType> ('auth/profile', async (arg, thunkAPI) => {
//     const res = await authApi.profile(arg)
//     return {profile: res.data}
// })


export const authReducer = slice.reducer;
export const authThunks = {register, login, forgotPassword, resetPassword};

