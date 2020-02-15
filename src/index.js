import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {useUser} from './context/auth'
import Main from "./pages/Main";
import Login from "./pages/Login";

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

function Root() {
    const user = useUser()
    return user ? <Main /> : <Login />
}