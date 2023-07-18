import data from '../../data';
import './Items.css'
import {Link as Anchor} from 'react-router-dom'

function Items() {
    const items = data.productos.map((item) => (
        <div className='container' key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio}</p>
            <Anchor to={'/descripcion'}>Ver más</Anchor>
        </div>
    ));

    return items
}

export default Items;
