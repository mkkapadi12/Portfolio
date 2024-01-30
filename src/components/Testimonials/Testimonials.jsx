import React from "react";
import "./Testimonials.css";
import AVR1 from "../../assets/avatar1.jpg";
import AVR2 from "../../assets/avatar2.jpg";
import AVR3 from "../../assets/avatar3.jpg";
import AVR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    index: "1",
    avatar: AVR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur praesentium alias corporis architecto, temporibus ullam veniam placeat, facilis officiis magnam voluptatum.",
  },
  {
    index: "2",
    avatar: AVR2,
    name: "Samantha Sci-Fi Lover",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur praesentium alias corporis architecto, temporibus ullam veniam placeat, facilis officiis magnam voluptatum.",
  },
  {
    index: "3",
    avatar: AVR3,
    name: "Peter Page Turner",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur praesentium alias corporis architecto, temporibus ullam veniam placeat, facilis officiis magnam voluptatum.",
  },
  {
    index: "4",
    avatar: AVR4,
    name: "Olivia Obsessed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur praesentium alias corporis architecto, temporibus ullam veniam placeat, facilis officiis magnam voluptatum.",
  },
];

const Testimonials = () => {
  return (
    <>
      <section id="Testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          className="test_container container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review, index }) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client_avatar">
                  <img src={avatar} alt="avatar1" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
