import React from 'react'
import {Routes,Route , HashRouter} from "react-router-dom"; 
import Registro from "./registro/Registro";
import App from '../App';
import Login from './inicioSesion/Login'
import Iniciar_sesion from './Iniciar_sesion'
import DataProvider from './context/DataContext';
import CarritoVacio from './carrito/CarritoVacio';
import Carrito from './carrito/CarritoContents'
import BarraRedesSociales from './barraRedesSociales/BarraRedesSociales';

export default function Enrutador() {
    return (
        <DataProvider>
            <HashRouter>
                <Routes>
                    <Route exact path = '/'  element={<App/>}/>
                    <Route exact path = '/registro'  element={<Registro/>}/>
                    <Route exact path ='/login' element={<Login/>}/>
                    <Route exact path ='/sesion-iniciada' element={<Iniciar_sesion/>}/>
                    <Route exact path ='/carrito-vacio' element={<CarritoVacio/>}/>
                    <Route exact path ='/carrito' element={<Carrito/>}/>
                </Routes>
                <BarraRedesSociales/>
            </HashRouter>
        </DataProvider>
    )
}
