import React from 'react'
import {Routes,Route , HashRouter} from "react-router-dom"; 
import Registro from "./registro/Registro";
import App from '../App';
import Login from './inicioSesion/Login'
import Iniciar_sesion from './Iniciar_sesion'

export default function Enrutador() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path = '/'  element={<App/>}/>
                <Route exact path = '/registro'  element={<Registro/>}/>
                <Route exact path ='/login' element={<Login/>}/>
                <Route exact path ='/sesion-iniciada' element={<Iniciar_sesion/>}/>
            </Routes>
        </HashRouter>
    )
}
