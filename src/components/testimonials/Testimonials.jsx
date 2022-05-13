// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import "./testimonials.css";
import avtr1 from "../../assets/avatar1.jpg";
import avtr2 from "../../assets/avatar2.jpg";
import avtr3 from "../../assets/avatar3.jpg";

const data = [
  {
    avatar: avtr1,
    name: "Имя клиента",
    review:
      "Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва",
  },
  {
    avatar: avtr2,
    name: "Имя клиента",
    review:
      "Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва",
  },
  {
    avatar: avtr3,
    name: "Имя клиента",
    review:
      "Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Отзывы клиентов</h5>
      <h2>рекомендации</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
