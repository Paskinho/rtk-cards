import React, {useEffect} from 'react';
import {Counter} from 'features/counter/Counter';
import 'app/App.css';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {appActions} from "app/app.slice";
import {Register} from "features/auth/Register/Register";
import {Login} from "features/auth/Login/Login";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({isLoading: false}))
        }, 3000)
    }, []);

    return (
        <div className="App">
            {isLoading && <h1>Loader...</h1>}
            <Counter/>
            <Register/>
            <Login/>
        </div>
    );
}

export default App;