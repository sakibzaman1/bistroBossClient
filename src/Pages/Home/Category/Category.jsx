import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide>
          <img className="w-80" src={img1} alt="" />
          <h3 className="text-4xl -mt-20 text-black">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-80" src={img2} alt="" />
          <h3 className="text-4xl -mt-20 text-black">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-80" src={img3} alt="" />{" "}
          <h3 className="text-4xl -mt-20 text-black">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-80" src={img4} alt="" />{" "}
          <h3 className="text-4xl -mt-20 text-black">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img className="w-80" src={img5} alt="" />{" "}
          <h3 className="text-4xl -mt-20 text-black">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
