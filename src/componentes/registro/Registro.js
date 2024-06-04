import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import './registro.css'
import colombiaData from '../colombia'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

export default function Registro() {
    const URL = process.env.REACT_APP_ENVIRONMENT

    const [identificacionError, setIdentificacionError] = useState(false)
    const [nomError, setNomError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailErrorVacio, setErrorEmailVacio] = useState(false)
    const [direccionError, setDireccionError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passComparacion, setPassComparacion] = useState(false)
    const [ciudades, setCiudades] = useState([]);
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useRef()

    function idError() {
        setIdentificacionError(false)
    }
    function nombreError() {
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false)
        setErrorEmailVacio(false)
    }
    function dirError() {
        setDireccionError(false)
    }
    function telError() {
        setTelefonoError(false)
    }
    function fechaNacimientoErrorFuncion() {
        setFechaNacimientoError(false)
    }
    function passError() {
        setPasswordError(false)
    }
    function passRepeat() {
        setPassComparacion(false)
        setPasswordErrorRepeat(false)
    }

    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        telefono: "",
        fechaNacimiento: "",
        password: "",
        passRepeat: "",
        rol: "",
        departamento: "",
        ciudad: "",
    });
    const handleChange = (e) => {

        const { name, value } = e.target
        console.log("Name:", name);
        console.log("Value:", value);
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        let validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

        if (values.identificacion.length < 7 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return
        }
        else if (values.nombres.length < 3 || values.nombres.length === 0) {
            setNomError(true)
            return
        }
        else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true)
            return
        }
        else if (values.email.length === 0) {
            setErrorEmailVacio(true)
            return
        }
        else if (!validEmail.test(values.email)) {
            setEmailError(true)
            return
        }
        else if (values.direccion.length < 15) {
            setDireccionError(true)
            return
        }
        else if (values.telefono.length !== 10) {
            setTelefonoError(true)
            return
        }
        else if (values.fechaNacimiento === "") {
            setFechaNacimientoError(true)
            return
        }
        else if (!validPassword.test(values.password)) {
            setPasswordError(true)
            return
        }
        else if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true)
            return
        }
        else if (values.password !== values.passRepeat) {
            setPassComparacion(true)
            return
        }
        console.log(values)
        console.log("--->>",URL)
        /*fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 'Accept': 'application/json'
            },
            body: JSON.stringify(values)
        })*/
        fetch(`${URL}/registro-usuario`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 
                'Accept': 'application/json'
            },
            body:JSON.stringify(values),
        })
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success"
                    });
                    form.current.reset()
                    window.location.hash = '/'
                }
                if (response.status === 400) {
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                        icon: "warning"
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error"
                });
            });
    }

    const cambioDepartamento = (e) => {
        const departamentoSeleccionado = e.target.value;
        const ciudadesDepartamento = colombiaData.find((item) => item.departamento === departamentoSeleccionado)?.ciudades || [];
        setCiudades(ciudadesDepartamento);
        setValues({ ...values, departamento: departamentoSeleccionado }); // Actualiza el estado con el departamento seleccionado
    };

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
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
                            <Link to="/login">
                            <li className="nav-item">
                                <LoginIcon className="iconoHeader"/>
                                <a className="nav-link"> Iniciar sesión </a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className='formulario'>
            <form className='formRegistro' onSubmit={handleSubmit} ref={form}>
                <div className="form-group">
                    <h1 className='tituloRegistro'> REGISTRO </h1>
                    <label htmlFor="numeroId">Documento</label>
                    <input type="number" className="form-control" id="inputNumero" name='identificacion' onChange={handleChange} onClick={idError} placeholder="Debe tener entre 7 y 10 digitos" />
                    {identificacionError ? <p> Debe estar entre 5 y 10 digitos</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" className="form-control" id="inputNombre" name='nombres' onChange={handleChange} onClick={nombreError} placeholder="Minimo tres caracteres" />
                    {nomError ? <p>Debe ser de minimo tres caracteres</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" className="form-control" id="inputApellido" name='apellidos' onChange={handleChange} onClick={apelliError} placeholder="Minimo tres caracteres" />
                    {apellidoError ? <p>Debe ser de minimo tres caracteres</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" name='email' onChange={handleChange} onClick={errorEmail} placeholder="example@gmail.com" />
                    {emailError ? <p>Debe ser tener la composicion alguien@gmail.com</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" className="form-control" id="inputDireccion" name='direccion' onChange={handleChange} onClick={dirError} placeholder="Direccion completa" />
                    {direccionError ? <p>Escriba una direccion valida</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" className="form-control" id="inputTelefono" name='telefono' onChange={handleChange} onClick={telError} placeholder="Debe tener 10 numeros" />
                    {telefonoError ? <p>Debe ser de 10 numeros</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="inputFecha" name='fechaNacimiento' onChange={handleChange} onClick={fechaNacimientoErrorFuncion} placeholder="Fecha de Nacimiento" />
                    {fechaNacimientoError ? <p>Debe ser una fecha valida</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <div className="password-input">
                        <input type={showPassword ? "text" : "password"} className="form-control" id="inputPassword" name='password' onChange={handleChange} onClick={passError} placeholder="Debe tener 8 caracteres" />
                        <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </button>
                    </div>
                    {passwordError ? <p>Debe ser de 8 caracteres, 1 mayúscula, 1 minúscula y un número</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmar">Confirmar Contraseña</label>
                    <div className="password-input">
                        <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="inputConfirmar" name='passRepeat' onChange={handleChange} onClick={passRepeat} placeholder="Debe ser la misma contraseña" />
                        <button type="button" className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </button>
                    </div>
                    {passwordErrorRepeat ? <p>Debe ser igual a la contraseña</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select className="form-control" id="inputRol" name="rol"  onChange={handleChange}>
                        <option value="Usuario">Usuario</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                </div>

                <label htmlFor="lugarNacimiento">Lugar de Nacimiento</label>
                <div className='departamento'>
                    <select onChange={cambioDepartamento} className="seleccionar">
                        <option value="">Seleccione un departamento </option>
                        {colombiaData.map((item) => (
                            <option key={item.departamento} value={item.departamento}>
                                {item.departamento}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='ciudad'>
                    <select className='seleccionar' onChange={(e) => setValues({ ...values, ciudad: e.target.value })}> {/* Actualiza el estado con la ciudad seleccionada */}
                        <option value="">Seleccione una ciudad</option>
                        {ciudades.map((ciudad) => (
                            <option key={ciudad} value={ciudad}>
                                {ciudad}
                            </option>
                        ))}
                    </select>
                </div>
                <button className='btnRegistrar' type="submit">Registrarse</button>
            </form>
        </div>
        </div>
    )
}
