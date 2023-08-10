import React from 'react'

function ItemCart(props) {
    const item = props
    return (
        <div>
            <img src={item.imagen} alt={item.nombre} />
            <span>{item.nombre}</span>
            <span>Cantidad: {item.count}</span>
        </div>
    )
}

export default ItemCart