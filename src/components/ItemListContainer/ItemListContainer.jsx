import React from 'react'
import './ItemListContainer.css'
import Catalogo from '../Catalogo/Catalogo'

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <h1 className='title'>{greeting}</h1>
            <div className='general-cont'>
                <Catalogo />
            </div>
        </>
    )
}
