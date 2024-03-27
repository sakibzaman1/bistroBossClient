import React from 'react';

const ItemCard = ({item}) => {
    const {image, name, recipe, id, category, price} = item;
    return (
        <div className='flex items-center justify-center'>
            <img className='w-32 h-28 rounded-full rounded-tl-none' src={image} alt="" />
            <div>
            <h1>{name}-----------------------</h1>
            <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default ItemCard;