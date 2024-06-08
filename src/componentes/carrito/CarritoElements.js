import React, { useContext } from 'react';
import { dataContext } from '../context/DataContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

function CarritoElements() {
    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext);

    const eliminarLibroDelCarrito = (e) => {
        const libroId = Number(e.currentTarget.id);
        const libroAEliminar = librosDelCarrito.find(libro => libro.id === libroId);

        if (!libroAEliminar) {
            console.error(`No se encontró un libro con el ID ${libroId}`);
            return;
        }

        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Estás seguro de que quieres eliminar ${libroAEliminar.tittle} (Cantidad: ${libroAEliminar.cantidad})?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const librosFiltrados = librosDelCarrito.filter(filtro => filtro.id !== libroId);
                setLibrosDelCarrito(librosFiltrados);

                Swal.fire(
                    'Eliminado',
                    `La locion ${libroAEliminar.tittle} ha sido eliminada del carrito.`,
                    'success'
                );
            }
        });
    };

    const cantidad = () => {
        setLibrosDelCarrito((actualeslibs) => {
            return actualeslibs.map((libs) => {
                const valor = document.getElementById(libs.id)?.value || libs.cantidad;
                return { ...libs, precioCarrito: libs.precio * valor, cantidad: valor };
            });
        });
    };

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    return librosDelCarrito.map((libs) => {
        return (
            <section className="h-100" key={libs.id}>
                <div className="container h-100 py-2">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={libs.image}
                                                className="img-fluid rounded-3"
                                                alt={libs.tittle}
                                            />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{libs.tittle}</p>
                                            <p><span className="text-muted"></span>{libs.description}</p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <input
                                                id={libs.id}
                                                min="1"
                                                name="quantity"
                                                value={libs.cantidad}
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={cantidad}
                                            />
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">$ {formatoNumero(libs.precioCarrito)}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="btn btn-dark" id={libs.id} onClick={eliminarLibroDelCarrito}>
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    });
}

export default CarritoElements;
