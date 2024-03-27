import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ItemCard from '../../Shared/ItemCard/ItemCard';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        fetch('/menu.json')
        .then(res=> res.json())
        .then(data=> {
            const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
            <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"--- Check it Out ---"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-10'>
                {
                    menu.map(item=> <ItemCard key={item?.id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;