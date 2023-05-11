import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter} from "react-router-dom";
import { Register } from 'features/auth/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/login',
        element: <h1>Login</h1>,

    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/packs',
        element: <h1>Packs</h1>
    }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
