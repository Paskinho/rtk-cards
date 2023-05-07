import {createSlice} from "@reduxjs/toolkit";


const appInitialState = {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
}

type InitialStateType = typeof appInitialState

const slice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const appReducer = slice.reducer