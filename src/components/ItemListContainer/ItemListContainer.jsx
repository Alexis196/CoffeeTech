import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { asyncdata } from '../../services/firebase';


export default function ItemListContainer({ greeting }) {
    let [product, setProduct] = useState([]);
    let [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function data() {
            try {
                setLoading(true);
                const productData = await asyncdata();
                const filterData = productData.filter(item => id === item.categoria);
                if (id && filterData.length > 0) {
                    setProduct(filterData);
                } else {
                    setProduct(productData);
                }
                setLoading(false);
            } catch (error) {
                console.log('Error', error);
                setLoading(false);
            }
        }
        data();
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
