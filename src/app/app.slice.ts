import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const appInitialState = {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false,
}

type InitialStateType = typeof appInitialState

const slice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
            state.isLoading = action.payload.isLoading;
        },
        setError: (state, action: PayloadAction<{error: string | null}>) => {
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions