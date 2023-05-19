import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID-NEED TO CHANGE LATER', 'YOUR_TEMPLATE_ID-NEED TO CHANGE LATER', form.current, 'YOUR_PUBLIC_KEY')
      e.target.reset();
  };
  return (
    <section id="contact">
<h5>Get In Touch</h5>
<h2>Contact Little Lemon</h2>

<div className="container contact__container">
  <div className="contact__options">
    <article className="contact__option">
      <MdOutlineEmail className="contact__option-icon"/>
      <h4>Email</h4>
      <h5>Dummymail@mail.com</h5>
      <a href="mailto:Dummymail@mail.com" target="_blank"> Send a message</a>
    </article>
    <article className="contact__option">
      <RiMessengerLine className="contact__option-icon"/>
      <h4>Mesenger</h4>
      <h5>myprofile</h5>
      <a href="https://m.me/MyFBProfile" target="_blank"> Send a message</a>
    </article>
    <article className="contact__option">
      <BsWhatsapp className="contact__option-icon"/>
      <h4>WhatsApp</h4>
      <h5>+123456789</h5>
      <a href="https://api.whatsapp.com/send?phone" target="_blank"> Send a message</a>
    </article>
  </div>
  {/*END OF CONTACT OPTIONS  https://www.emailjs.com/
  https://www.emailjs.com/docs/examples/reactjs/
   3.01*/}
  <form ref={form}>
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date"></input>
      <label for="res-time">Choose time</label>
      <select id="res-time ">
         <option>17:00</option>
         <option>18:00</option>
         <option>19:00</option>
         <option>20:00</option>
         <option>21:00</option>
         <option>22:00</option>
      </select>
      <label for="occasion">Occasion</label>
      <select id="occasion">
         <option>Birthday</option>
         <option>Anniversary</option>
      </select>
    <input type="text" name="name" placeholder="Your Full Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
    
    <button type="submit" className="btn btn-primary">Make Your reservation</button>
  </form>
</div>

    </section>
  )
}

export default Contact