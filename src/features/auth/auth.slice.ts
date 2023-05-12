import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "features/auth/auth.api";
import {AppDispatch, RootState} from "app/store";


const register = createAsyncThunk('auth/register', async (arg: ArgRegisterType) => {
  await authApi.register(arg)
});

const login = createAsyncThunk <{profile: ProfileType}, ArgLoginType, {
    state?: RootState
    dispatch?: AppDispatch,
    rejectValue?: unknown
}>
('auth/login', async (arg)=> {
         const res = await authApi.login(arg);
        return {profile: res.data}
});


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

