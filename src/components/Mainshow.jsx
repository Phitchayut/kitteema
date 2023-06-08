import React, { useRef, useState } from "react";
import imgPrd1 from "../../public/product1.jpg"
import imgPrd2 from "../../public/product2.png"
import imgPrd3 from "../../public/product3.jpg"
import imgPrd4 from "../../public/product4.png"

import Butterfly from "../../public/butterfly.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";


const imgPrd = [
  {
    imgName:imgPrd1,
  },
  {
    imgName:imgPrd2,
  },
  {
    imgName:imgPrd3,
  },
  {
    imgName:imgPrd4,
  },
];

const Mainshow = () => {
  return (
    <div className="my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper px-3"
      >
        {imgPrd.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.imgName} alt="" className="w-full h-[25rem]  rounded-3xl object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mainshow;
