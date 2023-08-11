import './ItemCart.css'
import { useContext } from "react";
import { CartContext } from '../../context/cartContext';

function ItemCart(props) {
    const item = props;

    return (
        <div className="contenedor-item">
            <img src={item.imagen} alt={item.nombre} />
            <span>{item.nombre}</span>
            <span>Cantidad: {item.count}</span>
        </div>
    );
}

export default ItemCart;
