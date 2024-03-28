import React from 'react';

const FoodCard = ({item}) => {
    const {image, name, recipe, id, category, price} = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-4 top-4 bg-slate-800 text-white px-2'>{price} $</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-0 border-b-2">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;