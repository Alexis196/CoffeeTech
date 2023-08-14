import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'
import CarritoVacio from '../../assets/img/carrito-vacio.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Cart() {
    const { cart, clearCart, deleteItem, getTotalPriceInCart } = useContext(CartContext)
    const precioTotal = getTotalPriceInCart()
    
    function deleteCart(){
        clearCart()
        toast.success('Los productos se eliminaron correctamente', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

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
                    <div className='seccion-carrito'>
                        <span>Total del carrito: ${precioTotal}</span>
                        <div className='botones-carrito'>
                            <button className='clear' onClick={deleteCart}>Vaciar Carrito</button>
                            <Link to='/checkout'>
                                <button className='comprar'>Comprar</button>
                            </Link>
                        </div>
                    </div>
                </> :
                <img className='carrito-vacio' src={CarritoVacio} alt="carrito-vacio" />}
        </section>
    )
}

export default Cart