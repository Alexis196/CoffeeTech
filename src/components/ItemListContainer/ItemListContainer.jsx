import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';


export default function ItemListContainer({ greeting }) {
    let [product, setProduct] = useState([]);
    let [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function asyncData() {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1000));
                const filterData = data.productos.filter(item => id === item.categoria);
                if (id && filterData.length > 0) {
                    setProduct(filterData);
                } else {
                    setProduct(data.productos);
                }
                setLoading(false);
            } catch (error) {
                console.log('Error', error);
                setLoading(false);
            }
        }
        asyncData();
    }, [id]);

    return (
        <>
            <h1 className='title'>{greeting}</h1>
            <div className='general-cont'>
                {loading ? <Loader/> : <ItemList product={product} />
                }
            </div>
        </>
    );
}
