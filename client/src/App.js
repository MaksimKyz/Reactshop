import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";
import AppRoute from "./components/AppRoute";



const App = () => {

    return (
        <div>
            <MyNavbar/>
            <AppRoute/>
        </div>
    );
};

export default App;