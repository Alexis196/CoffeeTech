import data from '../../data'
import { useParams } from 'react-router-dom'

function Descripcion() {
    const { id } = useParams()
    const item = data.productos.find((item) => item.id === parseInt(id))

    if (!item) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio}</p>
            <p>{item.descripcion}</p>
        </div>
    );
}

export default Descripcion;
