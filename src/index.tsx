import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Register } from 'features/auth/Register/Register';
import {Login} from "features/auth/Login/Login";
import { Profile } from 'features/profile/Profile';
import {GlobalError} from "common/components/GlobalError/GlobalError";
import 'react-toastify/dist/ReactToastify.css';
import {Header} from "features/header/Header";
import {RecoveryPassword} from "features/auth/RecoveryPassword/RecoveryPassword";
import {Packs} from "features/packs/Packs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/login',
        element: <Login/>,

    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/packs',
        element: <h1>Packs</h1>
    },
    {
        path: '/profile',
        element:<Profile/>
    },
    {
        path: '/recovery',
        element: <RecoveryPassword/>
    },
    {
        path: '/packs',
        element:<Packs/>
    }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Header/>
        <GlobalError/>
        <App />
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
