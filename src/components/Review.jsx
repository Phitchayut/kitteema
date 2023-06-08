import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode,Pagination } from "swiper";
import { motion } from "framer-motion";

const reviewList = [
  {
    img: "https://scontent.fbkk3-5.fna.fbcdn.net/v/t39.30808-6/346812217_1895924644118583_4922330480895312893_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFfHOKLH6SGiFpCvW72DFVX9iixxKhd4w_2KLHEqF3jD_oQKBMfFJSkOx2Gjz6fRFl85yjXxSu0rzRQ6l8MTSri&_nc_ohc=55DwYds3FQ4AX8g5kew&_nc_zt=23&_nc_ht=scontent.fbkk3-5.fna&oh=00_AfAx4C9o1ERRTDwZ6IVpH8_Pbq2q6b6UT_0p9Sxj5cnG1w&oe=648365D8",
    name: "Phitchayut C",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sapiente.",
  },
  {
    img: "https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-6/348649048_996639018168964_7774744064175537284_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZKZgU-KAQ7Ry28JU48-yOeEBsHaOmd_x4QGwdo6Z3_OVFRQXSazxgrRJF9UIo2UHa9o5uTto8bcPAd6KBMB_q&_nc_ohc=ODsLqC0r7S4AX_hiq6V&_nc_zt=23&_nc_ht=scontent.fbkk4-1.fna&oh=00_AfAfuYlP5jVEGve_BQ9qgMVvwIm5abLN6lR5JbvG9YrZyQ&oe=64834215",
    name: "Suriwassa C",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sapiente.",
  },
  {
    img: "https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.6435-9/79308014_2566477043443590_791575009662337024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmA5OGaY86OD2Rw5vnWJV8SS7S12cStBBJLtLXZxK0EAQJ0CZUD1svvkhe2-8S4cl3s0FvOYE4LWBG2yp09Tf1&_nc_ohc=D6f1QWtiXSUAX-IPsIe&_nc_ht=scontent.fbkk4-2.fna&oh=00_AfDm3vImg7Y4FxN8SeU9xZkppi_dd-BlPSShnM5eSyI_MQ&oe=64A536FB",
    name: "B. Maso",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sapiente.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Peter Lee",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sapiente.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "John Doe",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sapiente.",
  },
];

const Review = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="text-center w-[10rem]">
          <h1 className="text-3xl">Review</h1>
        </div>
      </div>
      <div className="card-testimonials mt-5 px-3">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode,Pagination]}
          className="mySwiper"
        >
          {reviewList.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="card p-5 backdrop-blur-sm bg-white/30 rounded-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="card-img flex justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-full w-[80px] h-[80px] object-cover mt-2"
                  />
                </div>
                <div className="card-name text-lg font-bold text-center mt-2">
                  {item.name}
                </div>
                <div className="card-commect italic p-3 text-center text-slate-600">
                  "{item.comment}"
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
