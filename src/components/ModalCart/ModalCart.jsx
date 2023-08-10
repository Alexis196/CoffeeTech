import { useContext } from 'react'
import './ModalCart.css'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


function ModalCart() {
    const { cart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)

    return (
        <div className='modal'>
            {cart.length ?
                (cart.map((item) => (
                    <div className='items-modal' key={item.id}>
                        <img src={item.imagen} alt={item.nombre} />
                        <span>{item.nombre}</span>
                        <span>Cantidad: {item.count}</span>
                    </div>
                ))) : <p>El carrito está vacío</p>}

            <div className='content-button'>
                <Link className='clear' to={'/'}>Ir al carrito</Link>
                <button className='clear' onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default ModalCart