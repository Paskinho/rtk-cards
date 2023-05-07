import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        isLoading: true,
        isAppInitialized: false,
    },
    reducers: {}
})

