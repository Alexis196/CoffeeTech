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
    console.log(product)

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
    }
    

    return (
        <div className='content-detail'>
            <div className='detalle'>
                <img src={product.imagen} alt={product.nombre} />
                <div className='info-product'>
                    <h3>{product.nombre}</h3>
                    <p>{product.descripcion}</p>
                    <p>Precio: {product.precio}</p>
                    <p>Stock: {product.stock}</p>
                    <div className='contador'>
                        <span>Cantidad: </span>
                        <button onClick={handleDis}>-</button>
                        <span id='count'>{count}</span>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <button className='add-cart' onClick={handleAddCart}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;