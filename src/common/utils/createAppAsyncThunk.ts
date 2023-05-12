import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "app/store";


const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState,
    dispatch: AppDispatch,
    rejectValue: unknown
}>()