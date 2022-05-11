import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Wat i offer</h5>
      {/* то что ты можешь сделать */}
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
          </ul>
        </article>
        {/* END */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
          </ul>
        </article>
        {/* END */}<article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Описание навыка</p>
            </li>
          </ul>
        </article>
        {/* END */}
      </div>
    </section>
  );
};

export default Services;
