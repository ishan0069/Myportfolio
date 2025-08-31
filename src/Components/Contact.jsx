import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container">
        <div className="row g-4 justify-content-center align-items-stretch">
          
          {/* Contact Options */}
          <div className="col-12 col-md-4">
            <div className="contact_option text-center p-3">
              <AiOutlineMail className="contact_option-icon mb-2"/>
              <h4>Email</h4>
              <h5>ishanmajumder28@gmail.com</h5>
              <a href="mailto:ishanmajumder28@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="contact_option text-center p-3">
              <FaFacebookMessenger className="contact_option-icon mb-2"/>
              <h4>Messenger</h4>
              <h5>Ishan Majumder</h5>
              <a href="https://www.facebook.com/profile.php?id=100083306663393" target="_blank" rel="noreferrer">Send a message</a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="contact_option text-center p-3">
              <ImWhatsapp className="contact_option-icon mb-2"/>
              <h4>Whatsapp</h4>
              <h5>+918100486674</h5>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">Send a message</a>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        {/* <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8">
            <form action="">
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <textarea name="message" rows="2" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>
          </div>
        </div> */}

      </div>
    </section>
  );
}

export default Contact;
