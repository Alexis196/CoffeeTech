import React from 'react'
import './ItemListContainer.css'
import Items from '../Items/Items.jsx'

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <h1 className='title'>{greeting}</h1>
            <div className='general-cont'>
                <Items />
            </div>
        </>
    )
}
