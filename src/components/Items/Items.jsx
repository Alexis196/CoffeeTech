import data from '../../data';
import './Items.css'

function Items() {
    const items = data.productos.map((item) => (
        <div className='container' key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio}</p>
            <span>Ver más</span>
        </div>
    ));

    return items
}

export default Items;
