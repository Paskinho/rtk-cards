import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, RootState} from "app/store";
import {appActions} from "app/app.slice";
import {AxiosError, isAxiosError} from "axios";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
                                    logic: Function,
                                    showGlobalError: boolean = true
) => {
    const {rejectWithValue} = thunkAPI;
    try {
        // dispatch(appActions.setIsLoading({isLoading: true}))
        return await logic();
    } catch (e) {
        if (showGlobalError) {
            return rejectWithValue(e);
        } else {
            return rejectWithValue(null)
        }

    }
    // finally {
    //     dispatch(appActions.setIsLoading({isLoading: false}))
    // }
};