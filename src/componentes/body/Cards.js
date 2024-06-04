import React, { useContext } from 'react'
import { dataContext } from '../context/DataContext'

function Cards(props) {
    const {setLibrosDelCarrito} = useContext(dataContext)

    function addToCart(){
        setLibrosDelCarrito((currentLibros)=>{
            const isItemFound = currentLibros.find((item)=> item.id === props.items.id);
            if(isItemFound){
                return currentLibros.map((item) =>{
                    if(item.id === props.items.id){
                        //...conservar valores que ya hay en el array
                        return {...item, cantidad: Number(item.cantidad)+1, precioCarrito: item.precioCarrito + item.precio}
                    }else{
                        return item
                    }
                })
            }else{
                return[...currentLibros,props.items]
            }
        })
    }
    return (
        <div className='card2'>
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5> {props.items.tittle}</h5>
                <p>{props.items.description}</p>
                <p>{props.items.precio}</p>
                <button 
                type="button" 
                class="btn btn-outline-dark" onClick={addToCart}>Comprar</button>
            </div>
        </div>
    )
}

export default Cards