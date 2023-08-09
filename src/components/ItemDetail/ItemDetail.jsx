import data from '../../data'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function ItemDetail() {
    let [count, setCount] = useState(1);
    const { id } = useParams();
    const item = data.productos.find((item) => item.id === parseInt(id));
    const { addCart } = useContext(CartContext);

    if (!item) {
        return <div>Producto no encontrado</div>;
    }

    function handleDis() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleAdd() {
        setCount(count + 1);
    }

    function handleAddCart() {
        addCart(item, count);
        console.log('Producto agregado al carrito');
        console.log(item, count);
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
            <button onClick={handleAddCart}>
                Agregar al Carrito
            </button>
        </div>
    );
}

export default ItemDetail;