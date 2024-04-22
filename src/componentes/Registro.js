import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import './registro.css'
import colombiaData from './colombia'
// import { Link } from 'react-router-dom';
// import Header from './header/Header';
// import Footer from './footer/Footer';


export default function Registro() {

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

    const form = useRef()

    function idError() { //Esta función setea a false la variable "identificacionError" para que el mensaje de error desaparezca cuando hacen click en el campo de la identificación.
        setIdentificacionError(false)
    }
    function nombreError() { //Esta función setea a false la variable "nomError" para que el mensaje de error desaparezca cuando hacen click en el campo del nombre.
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false) //Para cuando no escriban una dirección de correo válida en su estructura.
        setErrorEmailVacio(false) //Para cuan do dejen vacío el campo email
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
        //setPasswordErrorRepeat(false)
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
        fechaNacimento: "",
        password: "",
        passRepeat: "",
        ciudades: "",
    });
    const handleChange = (e) => {

        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //Expersión regular para: Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial. https://uibakery.io/regex-library/password
        let validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/; //Expresión regular para validar email, es decir, que el email ingresado tenga el formato correcto de una dirección de correo electrónico

        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return
        }
        else if (values.nombres.length < 3 || values.nombres.length === 0) { //El método trim( ) elimina los espacios en blanco en ambos extremos del string.        
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
        else if (values.telefono.length < 10 || values.telefono.length > 10) {
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


        fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 'Accept': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.status === 200) {
                    // alert("Usuario creado con éxito")
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success"
                    });
                    form.current.reset()
                    window.location.hash = '/login'

                }
                if (response.status === 400) {
                    //alert(" + response.status)
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                        icon: "warning"
                    });
                }
            })
            .catch((error) => {
                //alert("No fue posible finalizar el proceso de registro por un error " + error)
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error"
                });
            });
    }

    //const [ciudades, setCiudades] = useState([]);

    const cambioDepartamento = (e) => {
        const departamentoSeleccionado = e.target.value;
        const ciudadesDepartamento = colombiaData.find((item) => item.departamento === departamentoSeleccionado)?.ciudades || [];
        setCiudades(ciudadesDepartamento);
    };

    return (

        <div className='formulario'>
            <form onSubmit={handleSubmit} ref={form}>
                <div class="form-group">
                    <label for="numeroId">Documento</label>
                    <input type="number" class="form-control" id="inputNumero" name='identificacion' onChange={handleChange} onClick={idError} placeholder="entre 5 y 10 dígito" />
                    {identificacionError ? <p> Debe estar entre 5 y 10 digitos</p> : ""}
                </div>
                <div class="form-group">
                    <label for="nombres">Nombres</label>
                    <input type="text" class="form-control" id="inputNombre" name='nombres' onChange={handleChange} onClick={nombreError} placeholder="mínimo de tres caracteres" />
                    {nomError ? <p>Debe ser de minimo tres caracteres</p> : ""}
                </div>
                <div class="form-group">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" class="form-control" id="inputApellido" name='apellidos' onChange={handleChange} onClick={apelliError} placeholder="mínimo de tres caracteres" />
                    {apellidoError ? <p>Debe ser de minimo tres caracteres</p> : ""}
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" name='email' onChange={handleChange} onClick={errorEmail} placeholder="example@gmail.com" />
                    {emailError ? <p>Debe ser tener la composicion alguien@gmail.com</p> : ""}
                </div>
                <div class="form-group">
                    <label for="direccion">Direccion</label>
                    <input type="text" class="form-control" id="inputDireccion" name='direccion' onChange={handleChange} onClick={dirError} placeholder="Direcccion" />
                    {direccionError ? <p>Escriba una direccion valida</p> : ""}
                </div>
                <div class="form-group">
                    <label for="telefono">Telefono</label>
                    <input type="number" class="form-control" id="inputTelefono" name='telefono' onChange={handleChange} onClick={telError} placeholder="Debe tener 10 numeros" />
                    {telefonoError ? <p>Debe ser de 10 numeros</p> : ""}
                </div>
                <div class="form-group">
                    <label for="fecha">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="inputFecha" name='fechaNacimiento' onChange={handleChange} onClick={fechaNacimientoErrorFuncion} placeholder="Fecha de Nacimiento" />
                    {fechaNacimientoError ? <p>Debe ser una fecha valida</p> : ""}
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword" name='password' onChange={handleChange} onClick={passError} placeholder="Debe tener 8 caracteres" />
                    {passwordError ? <p>Debe ser de 8 caracteres, 1 mayuscula,1 minuscula y un numero</p> : ""}
                </div>
                <div class="form-group2">
                    <label for="confirmar">Confirmar Contraseña</label>
                    <input type="password" class="form-control" id="inputConfirmar" name='passRepeat' onChange={handleChange} onClick={passRepeat} placeholder="Confirmar" />
                    {passwordErrorRepeat ? <p>Debe ser de minimo tres caracteres</p> : ""}
                </div>
                <div className='select-container'>
                    <select onChange={cambioDepartamento} className="registro-select">
                        <option value="">Seleccione un departamento </option>
                        {colombiaData.map((item) => (
                            <option key={item.departamento} value={item.departamento}>
                                {item.departamento}
                            </option>
                        ))}
                    </select>

                    <select className='registro-select'>
                        <option value="" onChange={handleChange}>Seleccione una ciudad</option>
                        {ciudades.map((ciudad) => (
                            <option key={ciudad} value={ciudad}>
                                {ciudad}
                            </option>
                        ))}
                    </select>


                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}