import { createContext, useState } from "react";

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

    function clearCart(event){
        alert('Ups! El carrito está vacío')
        event.stopPropagation()
        return setCart([])
    }

    function totalItemCart() {
        let total = 0
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addCart, totalItemCart, clearCart, deleteItem }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
