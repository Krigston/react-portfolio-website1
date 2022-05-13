import React from "react";
import "./footer.css";
import {TiSocialInstagram} from 'react-icons/ti'
import {AiOutlineMessage} from 'react-icons/ai'


const Footer = () => {
  return <footer>
    <a href="#" className="footer__logo">KK</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contacts">Contacts</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://instagram.com"><TiSocialInstagram/></a>
      <a href="https://vk.com"><AiOutlineMessage/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;All right reserved</small>
    </div>
  </footer>;
};

export default Footer;
