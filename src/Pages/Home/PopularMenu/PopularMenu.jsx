
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ItemCard from '../../Shared/ItemCard/ItemCard';
import UseMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popularItems = menu.filter(item=> item.category === 'popular');


    return (
        <div className='mb-20'>
            <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"--- Check it Out ---"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-10'>
                {
                    popularItems.map(item=> <ItemCard key={item?.id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;