import React, { useContext, useState, useEffect } from 'react';
import Cart from '../../assets/img/cart.png';
import './CartWidget.css';
import { CartContext } from '../../context/cartContext';
import ModalCart from '../ModalCart/ModalCart';

export default function CartWidget() {
    const [modal, setModal] = useState(false)
    const { totalItemCart } = useContext(CartContext);

    function handleModal() {
        setModal(!modal)
    }

    return (
        <div className='content-cart' onClick={handleModal}>
            <img src={Cart} alt="cart" className="cart" />
            <span className="cantidad">{totalItemCart()}</span>
            <div className='div-modal'>
                {modal && <ModalCart />}
            </div>
        </div>
    );
}
