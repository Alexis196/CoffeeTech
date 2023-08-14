import { createContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext({ cart: 0 });

function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addCart(item, count) {
        if (count > 0) {
            const existingItem = cart.find(existingItem => existingItem.id === item.id);

            if (existingItem) {
                const newCart = cart.map(existingItem =>
                    existingItem.id === item.id ? { ...existingItem, count: existingItem.count + count } : existingItem
                );
                setCart(newCart);
            } else {
                const newItemInCart = { ...item, count };
                const newCart = [...cart, newItemInCart];
                setCart(newCart);
            }
        }
    }

    function deleteItem(item) {
        toast.success('Quitaste un producto con éxito', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const newCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                if (cartItem.count > 1) {
                    return { ...cartItem, count: cartItem.count - 1 };
                } else {
                    return null;
                }
            }
            return cartItem;
        })
            .filter(cartItem => cartItem !== null);
        setCart(newCart);
    }

    function clearCart(event) {
        return setCart([])
    }

    function totalItemCart() {
        let total = 0
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    function getPriceProduct(productId) {
        let total = 0;
        cart.forEach((item) => {
            if (item.id === productId) {
                total += parseFloat(item.precio) * item.count;
            }
        });
        return total;
    }

    function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => {
            total += parseFloat(item.precio) * item.count;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            addCart, 
            totalItemCart, 
            clearCart, 
            deleteItem,
            getPriceProduct,
            getTotalPriceInCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
