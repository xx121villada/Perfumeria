import React from 'react'

function Cards(props) {
    return (
        <div className='card2'>
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5> {props.items.tittle}</h5>
                <p>{props.items.description}</p>
                <p>{props.items.precio}</p>
                <button type="button" class="btn btn-outline-dark">Comprar</button>
            </div>
        </div>
    )
}

export default Cards