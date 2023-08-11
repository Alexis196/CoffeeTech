import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'
import CarritoVacio from '../../assets/img/carrito-vacio.png'

function Cart() {
    const { cart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)
    const { deleteItem } = useContext(CartContext);

    return (
        <section className='div-carrito'>
            <h2>Productos</h2>
            {cart.length ?
                <>
                    {cart.map((item) => (
                        <div className='items-modal' key={item.id}>
                            <ItemCart {...item} />
                            <button className='quita-prod' onClick={() => deleteItem(item)}>Quitar un producto</button>
                        </div>
                    ))}
                    <button className='clear' onClick={clearCart}>Vaciar Carrito</button>
                </> :
                <img className='carrito-vacio' src={CarritoVacio} alt="carrito-vacio" />}
        </section>
    )
}

export default Cart