import React, { useEffect, useState } from 'react';

const UseMenu = () => {
   
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch('https://bistro-boss-server-nine-bay.vercel.app/menu')
        .then(res=> res.json())
        .then(data=> {
            // const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(data);
            setLoading(false);
        })
    },[])
    return [menu, loading];
};

export default UseMenu;