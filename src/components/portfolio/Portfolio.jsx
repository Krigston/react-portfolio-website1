import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Название работы",
    github: "https://github.com/", //ссылка на работу
    demo: "https://dribbble.com/shots/18215026-Type-Experiment-04", //ссылка на demo работы
  },
  {
    id: 2,
    image: img2,
    title: "Название работы",
    github: "https://github.com/", //ссылка на работу
    demo: "https://dribbble.com/shots/18215026-Type-Experiment-04", //ссылка на demo работы
  },
  {
    id: 3,
    image: img3,
    title: "Название работы",
    github: "https://github.com/", //ссылка на работу
    demo: "https://dribbble.com/shots/18215026-Type-Experiment-04", //ссылка на demo работы
  },
  {
    id: 4,
    image: img4,
    title: "Название работы",
    github: "https://github.com/", //ссылка на работу
    demo: "https://dribbble.com/shots/18215026-Type-Experiment-04", //ссылка на demo работы
  },
  {
    id: 5,
    image: img6,
    title: "Название работы",
    github: "https://github.com/", //ссылка на работу
    demo: "https://dribbble.com/shots/18215026-Type-Experiment-04", //ссылка на demo работы
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio 1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
