import React from 'react'
import Cookies from 'universal-cookie'
import Carrusel from './carrusel/Carrusel'
import Footer from './footer/Footer'
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Swal from 'sweetalert2'
import CardList from './body/CardList';
import SesionExpired from './sesionExpired/SesionExpired';
import './iniciar_sesion.css'

export default function Iniciar_Sesion() {

    const cookie = new Cookies();
    const nombres = cookie.get('nombres');
    const apellidos = cookie.get('apellidos');

    function Cerrar() {
        Swal.fire({
            title: 'Estas seguro de cerrar sesion?',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    window.location.hash = '/'
                }
            })
    }
    return (
        <div>
            <div>
                <h2 className='bienvenido'> Bienvenid@  {nombres} {apellidos} </h2>
            </div>
            <div className="contenedor">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img className="logo" src="icono.jpg" alt="logo" />
                        <div className="titulo">
                            <p> DULCE FRAGANCIA </p>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <HomeIcon />
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <AddIcCallIcon />
                                    <a className="nav-link"> Contacto </a>
                                </li>
                            </ul>
                            <button className='btnCerrar' onClick={Cerrar}> Cerrar sesion</button>
                        </div>
                    </div>
                </nav>
            </div>
            <Carrusel />
            <CardList />
            <Footer />
            <SesionExpired/>
        </div>
    )
}
