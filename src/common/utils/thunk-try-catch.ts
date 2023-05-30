import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, RootState} from "app/store";
import {appActions} from "app/app.slice";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
        return await logic();
    } catch (e: any) {
        const error = e.response ? e.response.data.error : e.message;
        dispatch(appActions.setError({ error }));
        return rejectWithValue(null);
    }
};