import React, {useState} from 'react'
import './registro.css'

export default function Registro() {

    const[values, setValues] = useState({
        documento:"",
        nombre:"",
        apellido:"",
        email:"",
        direccion:"",
        telefono:"",
        fecha:"",
        contra:"",
        contra2:"",
    }); 
    const handlechange = (e) =>{
        const {name, value} = e.target 
        const newValues= {
            ...values,
            [name]:value, 
        }
        setValues(newValues)
    }

    return (
        <div className="principal1">
            <form >
                <div className="form-group">
                    <label for="documento">Documento</label>
                    <input type="number" className="form-control" id="documento" name="documento" onChange={handlechange} placeholder="Debe de estar entre 5 y 10 digitos" />
                </div>
                <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" onChange={handlechange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido" name="apellido" onChange={handlechange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email"  onChange={handlechange} placeholder="Debe ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label for="direccion">Direccion</label>
                    <input type="password" className="form-control" id="direccion" name="direccion" onChange={handlechange} placeholder="Debe tener un formato valido Ejemplo: user@gmail.com" />
                </div>
                <div className="form-group">
                    <label for="telefono">Telefono</label>
                    <input type="number" className="form-control" id="telefono" name="telefono" onChange={handlechange} placeholder="Debe ser de 10 numeros" />
                </div>
                <div className="form-group">
                    <label for="fecha">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="fecha" name="fecha" onChange={handlechange} placeholder="Dede ser de minimo 3 caracteres" />
                </div>
                <div className="form-group">
                    <label for="contraseña"> Contraseña </label>
                    <input type="password" className="form-control" id="contra" name="contra" onChange={handlechange} placeholder="debe ser de minimo 8 caracteres, una mayuscula, una minuscula, un numero " />
                </div>
                <div className="form-group2">
                    <label for="contraseña2">Repita su contraseña</label>
                    <input type="password" className="form-control" id="contra2" name="contra2" onChange={handlechange} placeholder="Repita su contraseña" />
                </div>
                <button type="submit" >Registrarme</button>
            </form>
        </div>
    )
}
