import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import UseMenu from "../../Hooks/UseMenu";
import ItemCard from "../Shared/ItemCard/ItemCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/salad-bg.jpg'


const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bistro Boss || MENU</title>
      </Helmet>
      <div>
        <Cover img={menuBg} title={"OUR MENU"}></Cover>
      </div>
      {/* Today's Offer */}
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"----- Don't Miss -----"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/*Dessert  */}
      <MenuCategory items={dessert} title={"DESSERTS"} coverImg={dessertBg}></MenuCategory>
      {/*SALAD  */}
      <MenuCategory items={salad} title={"SALAD"} coverImg={saladBg}></MenuCategory>
      {/*pizza  */}
      <MenuCategory items={pizza} title={"PIZZA"} coverImg={pizzaBg}></MenuCategory>
      {/*soup  */}
      <MenuCategory items={soup} title={"SOUP"} coverImg={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
