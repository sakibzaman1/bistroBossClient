import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed ">
      <div className="bg-black bg-opacity-25">
      <SectionTitle
        heading={"FEATURED ITEM"}
        subHeading={"----- Check it Out -----"}
      ></SectionTitle>
      </div>
      <div className="flex items-center justify-center gap-10 py-20 px-36 text-white bg-black bg-opacity-25">
        <div>
          <img className="" src={featuredImg} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
