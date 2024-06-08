import React,{useContext}from "react";
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "react-router-dom";
import { dataContext } from '../context/DataContext'

function Header() {

    const {librosDelCarrito, setLibrosDelCarrito} = useContext(dataContext)
    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="icono.jpg" alt="logo"/>
                    <div className="titulo">
                    <p> DULCE FRAGANCIA </p>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <AddIcCallIcon/> 
                                <a className="nav-link"> Contacto </a>
                            </li>
                            <Link to='/registro'>
                            <li className="nav-item">
                                <AccountBoxIcon className="iconoHeader"/>
                                <a className="nav-link"> Registrarse </a>
                            </li>
                            </Link>
                            <Link to="/login">
                            <li className="nav-item">
                                <LoginIcon className="iconoHeader"/>
                                <a className="nav-link"> Iniciar sesión </a>
                            </li>
                            </Link>
                            <Link to="/carrito">
                                <h2 className="carrito"> 🛒{librosDelCarrito.length} </h2>
                                <h2 className="tituloCompras"> {"Compras"}</h2>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header