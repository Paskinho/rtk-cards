import React, {useEffect} from 'react';
import {Counter} from 'features/counter/Counter';
import 'app/App.css';

import {appActions} from "app/app.slice";
import {LinearProgress} from "@mui/material";


import {useAppDispatch, useAppSelector} from "common/components/hooks";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(appActions.setIsLoading({isLoading: false}))
    //     }, 3000)
    // }, []);

    return (
        <div className="App">
            {isLoading && <LinearProgress/>}
            {/*<Register/>*/}
            {/*<RecoveryPassword/>*/}
        </div>
    );
}

export default App;