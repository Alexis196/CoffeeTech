import './InfoCompra.css';
import { Link } from 'react-router-dom';

function InfoCompra({ orderData, idOrder }) {
    console.log('order id', idOrder);

    return (
        <div className='info-comp'>
            <h2>Gracias por tu compra</h2>
            <p>Estamos preparando tus productos para enviarlos a la brevedad</p>
            <p>Este es su número de orden: <span className='id'>{idOrder}</span> </p>
            <Link className='inicio' to={'/'}>Inicio</Link>
        </div>
    );
}

export default InfoCompra;
