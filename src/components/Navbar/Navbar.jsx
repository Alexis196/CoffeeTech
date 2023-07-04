import React from 'react'
import './navbar.css'
import Coffee from '../../assets/img/coffee.png'
import CartWidget from '../CartWidget/CartWidget'


export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='marca'>
                <img src={Coffee} alt="coffe-logo" className='logo' />
                <span className='logo-title'>Coffe Tech</span>
            </div>
            <div className='links'>
                <span>Cápsulas</span> 
                <span>Instantaneo</span> 
                <span>Granos</span> 
                <CartWidget/>
            </div>
        </nav>
    )
}
