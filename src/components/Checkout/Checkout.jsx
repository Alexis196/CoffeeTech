import { useContext, useState } from 'react';
import './Checkout.css';
import FormCompra from '../FormCompra/FormCompra';
import { createOrder } from '../../services/firebase';
import { CartContext } from '../../context/cartContext';
import InfoCompra from '../InfoCompra/InfoCompra';

function Checkout() {
    const { cart, getTotalPriceInCart, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [orderData, setOrderData] = useState(null);

    async function handleFormSubmit(datosUsuario) {
        if (cart.length === 0) {
            alert('El carrito está vacío. Agregue productos antes de continuar con la compra.');
            return;
        }
    
        const totalPrice = getTotalPriceInCart();
        const newOrderData = {
            item: cart,
            user: datosUsuario,
            date: new Date(),
            price: totalPrice,
        };
    
        try {
            const idOrder = await createOrder(newOrderData);
            console.log(newOrderData);
            console.log('Su código de compra es: ', idOrder);
            setOrderId(idOrder);
            setOrderData(newOrderData); // Store the orderData in state
            clearCart();
        } catch (error) {
            alert(`No se pudo realizar la compra ${error.message}`);
        }
    }
    

    return (
        <div className="checkout">
            {orderId ? (
                <InfoCompra orderData={orderData} idOrder={orderId} />
            ) : (
                <>
                    <h2>Formulario de compra</h2>
                    <p>Por favor complete los siguientes campos para finalizar el proceso de compra</p>
                    <FormCompra onSubmit={handleFormSubmit} />
                </>
            )}
        </div>
    );
}

export default Checkout;
