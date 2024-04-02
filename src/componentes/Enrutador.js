import React from 'react'
import {Routes,Route , HashRouter} from "react-router-dom"; 
import Registro from './Registro';
import App from '../App';
import Login from './Login';

export default function Enrutador() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path = '/'  element={<App/>}/>
                <Route exact path = '/registro'  element={<Registro/>}/>
                <Route exact path ='/login' element={<Login/>}/>
            </Routes>
        </HashRouter>
    )
}
