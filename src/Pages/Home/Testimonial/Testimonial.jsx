import React, { useEffect, useRef, useState } from "react";
import { BsChatSquareQuoteFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0); // Initial value

  useEffect(() => {
    fetch("https://bistro-boss-server-nine-bay.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"----- What our clients say -----"}
      ></SectionTitle>
      <div className="mb-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="text-center px-24 flex flex-col items-center justify-center gap-6">
                <BsChatSquareQuoteFill size={50}></BsChatSquareQuoteFill>
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
                <p>{review?.details}</p>
                <h3 className="text-yellow-700">{review?.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
