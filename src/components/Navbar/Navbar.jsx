import React from 'react'
import './navbar.css'
import Coffee from '../../assets/img/coffee.png'

export default function Navbar({ children }) {
    return (
        <nav className='nav'>
            <div className='marca'>
                <a href="/">
                    <img src={Coffee} alt="coffe-logo" className='logo' />
                    <span className='logo-title'>Coffee Tech</span>
                </a>
            </div>
            <div className='links'>
                <a href='#'>Cápsulas</a>
                <a href='#'>Instantáneo</a>
                <a href='#'>Granos</a>
                {children}
            </div>
        </nav>
    )
}
