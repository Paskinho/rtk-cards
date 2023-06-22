import React, {useEffect} from 'react';
import 'app/App.css';
import {LinearProgress} from "@mui/material";


import {useAppDispatch, useAppSelector} from "common/components/hooks";
import {Register} from "features/auth/Register/Register";
import {RecoveryPassword} from "features/auth/RecoveryPassword/RecoveryPassword";

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