import React, { useContext, useState, useEffect } from 'react';
import Cart from '../../assets/img/cart.png';
import './CartWidget.css';
import { CartContext } from '../../context/cartContext';
import ModalCart from '../ModalCart/ModalCart';

export default function CartWidget() {
    const { totalItemCart } = useContext(CartContext);

    return (
        <div className='content-cart'>
            <img src={Cart} alt="cart" className="cart" />
            <span className="cantidad">{totalItemCart()}</span>
        </div>
    );
}
