import './ItemList.css'
import { Link as Anchor } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemList({product}) {

    return(
    <div className='container-items'>

        {product.map((item) => (
            <div className='container' key={item.id}>
                <img src={item.imagen} alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <Anchor className='anchor' to={`/item/${item.id}`}>Ver más</Anchor>
            </div>
        ))}
    </div>
    )
}

export default ItemList;