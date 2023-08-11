import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import { getProductData } from '../../services/firebase'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function ItemDetail() {
    const [product, setProduct] = useState([]);
    let [count, setCount] = useState(1);
    const { id } = useParams();
    const { addCart } = useContext(CartContext);

    useEffect(() => {
        async function requestProduct() {
            const respuesta = await getProductData(id);
            setProduct(respuesta);
        }
        requestProduct();
    }, [id]);

    if (product.length === 0) {
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
        addCart(product, count);
        alert('Producto agregado al carrito');
    }

    return (
        <div className='detalle'>
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>Precio: {product.precio}</p>
            <p>{product.descripcion}</p>
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