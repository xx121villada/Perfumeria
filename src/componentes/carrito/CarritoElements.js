import React, { useContext } from 'react'
import { dataContext } from '../context/DataContext'

function CarritoElements() {
    const {librosDelCarrito, setLibrosDelCarrito} = useContext(dataContext)

    const eliminarLibroDelCarrito = (e) => {
        const librosFiltrados = librosDelCarrito.filter((filtro)=> filtro.id !== Number(e.currentTarget.id))
        setLibrosDelCarrito(librosFiltrados)
    }

    const cantidad = () => {
        setLibrosDelCarrito((actualeslibs)=> {
            return actualeslibs.map((libs) => {
                const valor = document.getElementById(libs.id)
                return {...libs, precioCarrito:libs.precio * valor.value, cantidad:valor.value}
            })
        })
    }
    const formatoNumero = (number) =>{
        return new Intl.NumberFormat().format(number)
    }

    return librosDelCarrito.map((libs)=> { 
        return (
            <section class="h-100">
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                        class="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>
                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={libs.image}
                                                class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-3">
                                            <p class="lead fw-normal mb-2">{libs.tittle}</p>
                                            <p><span class="text-muted">Size: </span>{libs.description}</p>
                                        </div>
                                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            {/* <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i class="fas fa-minus"></i>
                                            </button> */}

                                            <input id={libs.id} min="1" name="quantity" value={libs.cantidad} type="number"
                                                class="form-control form-control-sm" onChange={cantidad}/>

                                            {/* <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i class="fas fa-plus"></i>
                                            </button> */}
                                        </div>
                                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 class="mb-0">$ {formatoNumero(libs.precioCarrito)}</h5>
                                        </div>
                                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className='btn btn-dark' id={libs.id} onclick={eliminarLibroDelCarrito}><i className='bi bi-trash3-fill'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    });
}
export default CarritoElements;