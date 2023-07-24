import { useState, useEffect } from 'react'
import data from '../../data';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemListContainer({ greeting }) {
    let [product, setProduct] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1300));
                setProduct(data.productos)
                setLoading(false)
            }
            catch (error) {
                console.log('Error', error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    

    console.log(product)
    return (
        <>
            <h1 className='title'>{greeting}</h1>
            <div className='general-cont'>
                {loading ? <div>Loading...</div> : <ItemList product={product} />}
            </div>
        </>
    )
}
