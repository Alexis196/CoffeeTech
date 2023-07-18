import {Link} from 'react-router-dom'
import './navbar.css'
import Coffee from '../../assets/img/CoffeeTech.png'
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='marca'>
                <Link to="/">
                    <img src={Coffee} alt="coffe-logo" className='logo' />
                    <span className='logo-title'>Coffee Tech</span>
                </Link>
            </div>
            <div className='links'>
                <Link to='#'>Cápsulas</Link>
                <Link to='#'>Instantáneo</Link>
                <Link to='#'>Granos</Link>
                <CartWidget/>
            </div>
        </nav>
    )
}
