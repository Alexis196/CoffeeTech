import React from 'react'
import Cart from '../../assets/img/cart.png'
import './CartWidget.css'

export default function CartWidget() {
    return (
        <>
            <img src={Cart} alt="cart" className='cart' />
            <span className='cantidad'>2</span>
        </>
    )
}
