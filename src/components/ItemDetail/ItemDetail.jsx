import data from '../../data'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import { useState } from 'react'

function ItemDetail(product) {
    let [count, setCount] = useState(0)
    const { id } = useParams()
    const item = data.productos.find((item) => item.id === parseInt(id))

    if (!item) {
        return <div>Producto no encontrado</div>;
    }
    function handleDis() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }
    function handleAdd() {
        setCount(count + 1);
    }

    return (
        <div className='detalle'>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio}</p>
            <p>{item.descripcion}</p>
            <div>
                <button onClick={handleDis}>-</button>
                <span id='count'>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    );
}

export default ItemDetail;