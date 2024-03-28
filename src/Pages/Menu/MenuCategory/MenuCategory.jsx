import React from 'react';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
              <div className='grid grid-cols-2 gap-10'>
                {
                    items.map(item=> <ItemCard key={item?.id} item={item}></ItemCard>)
                }
            </div>
            <Link to={`/order/${title?.toLowerCase()}`}>
            <button className="btn btn-outline border-0 border-b-2 flex mx-auto my-10">Order Your Favorite Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;