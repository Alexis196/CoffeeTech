import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'
import CarritoVacio from '../../assets/img/carrito-vacio.png'

function Cart() {
    const { cart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)

    return (
        <section className='div-carrito'>
            <h2>Productos</h2>
            <div>
                {cart.length ?
                    (cart.map((item) => (
                        <div className='items-modal' key={item.id}>
                            <ItemCart {...item} />
                        </div>
                    ))) :<img className='carrito-vacio' src={CarritoVacio} alt="carrito-vacio" />}
            </div>
            <button className='clear' onClick={clearCart}>Vaciar Carrito</button>
        </section>
    )
}

export default Cart