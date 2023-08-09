import { useContext } from 'react'
import './ModalCart.css'
import { CartContext } from '../../context/cartContext'


function ModalCart() {
    const { cart } = useContext(CartContext)

    return (
        <div className='modal'>
            {cart.length ?
                (cart.map((item, index) => (
                    <div className='items-modal' key={index}>
                        <img src={item.imagen} alt={item.nombre} />
                        <span>{item.nombre}</span>
                        <span>Cantidad: {item.count}</span>
                    </div>
                ))) : <p>El carrito está vacío</p>}

        </div>
    )
}

export default ModalCart