import React from 'react';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
              <div className='grid grid-cols-2 gap-10'>
                {
                    items.map(item=> <ItemCard key={item?.id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;