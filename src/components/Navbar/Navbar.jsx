import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './navbar.css';
import Coffee from '../../assets/img/CoffeeTech.png'
import CartWidget from '../CartWidget/CartWidget';

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
                <Link to='/category/capsula'>Cápsulas</Link>
                <Link to='/category/instantaneo'>Instantáneo</Link>
                <Link to='/category/granos'>Granos</Link>
                <Link className='carrito' to='/cart'> <CartWidget/> </Link>
            </div>
        </nav>
    );
}
