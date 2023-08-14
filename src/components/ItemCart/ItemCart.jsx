import React, { useContext } from "react";
import "./ItemCart.css";
import { CartContext } from "../../context/cartContext";

function ItemCart(props) {
    const { getPriceProduct } = useContext(CartContext);
    const item = props;

    const totalProductPrice = getPriceProduct(item.id);
    return (
        <div className="contenedor-item">
            <img src={item.imagen} alt={item.nombre} />
            <span>{item.nombre}</span>
            <span>Cantidad: {item.count}</span>
            <span>Precio por producto: ${totalProductPrice.toFixed(2)}</span>
        </div>
    );
}

export default ItemCart;
