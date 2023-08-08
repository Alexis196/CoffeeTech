import { createContext } from "react";

const CartContext = createContext({ cart: 0 });

function CartContextProvider(props) {
    function addCart(item, count) {
        if (count > 0) {
            const productToAdd = {
                ...item,
                quantity: count
            };
            console.log(productToAdd);
        } else {
            console.log("Debes seleccionar al menos una cantidad.");
        }
    }

    return (
        <CartContext.Provider value={{ cart: 0, addCart: addCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
