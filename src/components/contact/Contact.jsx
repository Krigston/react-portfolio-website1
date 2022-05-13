import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1y2m7mn', 'template_ls1h8c3', form.current, 'cDae7TfoV7YTGy5_L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sedovwwwwb.bbk.r1235@gmail.com</h5>
            <a href="mailto:sedovwwwwb.bbk.r1235@gmail.com" target='_blank' rel="noreferrer">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Krigston</h5>
            <a href="https://t.me/Krigston" target='_blank' rel="noreferrer">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+47328974827</h5>
            <a href="https://api.whatsapp.com/send?phone=+79521740828" target='_blank' rel="noreferrer">Отправить сообщение</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Ваше имя' required/>
          <input type='email' name='email' placeholder='Ваш Email' required/>
          <textarea name="message" rows="7" placeholder='Ваше Сообщение' required></textarea>
          <button type='submit' className='btn btn-primary'>Отправить сообщение</button>
        </form>
      </div>
    </section>
  )
}

export default Contact