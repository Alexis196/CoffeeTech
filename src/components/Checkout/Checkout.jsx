import { useContext, useState } from 'react';
import './Checkout.css';
import FormCompra from '../FormCompra/FormCompra';
import { createOrder } from '../../services/firebase';
import { CartContext } from '../../context/cartContext';
import InfoCompra from '../InfoCompra/InfoCompra';
import { toast } from "react-toastify";

function Checkout() {
    const { cart, getTotalPriceInCart, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [orderData, setOrderData] = useState(null);

    async function handleFormSubmit(datosUsuario) {
        if (cart.length === 0) {
            toast('El carrito está vacío. Agregue productos antes de continuar con la compra', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
            setOrderId(idOrder);
            setOrderData(newOrderData);
            clearCart();
        } catch (error) {
            toast.error(`No se pudo realizar la compra ${error.message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
