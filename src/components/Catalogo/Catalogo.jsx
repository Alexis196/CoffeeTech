import data from '../../data';
import './Catalogo.css'
import { Link as Anchor } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Catalogo() {
    let [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1300));
                setProduct(data.productos)
            }
            catch (error) {
                console.log('Error', error)
            }
        }
        fetchData()
    }, [])
    console.log(product)

    return(
    <>
        {product.map((item) => (
            <div className='container' key={item.id}>
                <img src={item.imagen} alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <Anchor to={`/item/${item.id}`}>Ver más</Anchor>
            </div>
        ))}
    </>
    )
}

export default Catalogo;
