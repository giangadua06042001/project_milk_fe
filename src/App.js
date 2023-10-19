import React from 'react';
import './App.css';
import Guest from "./guest/Guest";
import Register from "./authen/Register";
import Test from "./guest/Test";
import firebase from 'firebase/compat/app';
import {app} from "./Firebase"

function App() {
    return (
        <div className="App">
            <Register/>
        </div>
    );
}

export default App;