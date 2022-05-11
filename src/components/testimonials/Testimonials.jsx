import React from "react";
import "./testimonials.css";
import avtr1 from "../../assets/avatar1.jpg";
import avtr2 from "../../assets/avatar2.jpg";
import avtr3 from "../../assets/avatar3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Отзывы клиентов</h5>
      <h2>рекомендации</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Имя клиента</h5>
          <small className="client__review">
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва
          </small>
        </article>
        <article className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Имя клиента</h5>
          <small className="client__review">
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва
          </small>
        </article>
        <article className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Имя клиента</h5>
          <small className="client__review">
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва
            Текст отзыва
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
