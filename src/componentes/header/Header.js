import React from "react";
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="icono.jpg" alt="logo"/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <VideoLibraryIcon/>
                                <a className="nav-link" href="#"> Tutoriales </a>
                            </li>
                            <li className="nav-item">
                                <AddLinkIcon/>
                                <a className="nav-link"> Referencias </a>
                            </li>
                            <li className="nav-item">
                                <AddIcCallIcon/> 
                                <a className="nav-link"> Contacto </a>
                            </li>
                            <li className="nav-item">
                                <AccountBoxIcon/>
                                <a className="nav-link"> Registrarse </a>
                            </li>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link"> Iniciar sesión </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header