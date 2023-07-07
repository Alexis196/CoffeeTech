import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <h1 className='title'>{greeting}</h1>
        </>
    )
}
