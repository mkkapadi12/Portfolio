import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
const Contact = () => {
  return (
    <>
      <section id="contact" className="container">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_icon" />
              <h4>Email</h4>
              <h5>mayurkapadi12@gmail.com</h5>
              <a href="mailto:mayurkapadi12@gmail.com">Send a Message</a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_icon" />
              <h4>Messenger</h4>
              <h5>Mayur Kapadi</h5>
              <a href="#">Send a Message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_icon" />
              <h4>Whatsapp</h4>
              <h5>+91 9727434078</h5>
              <a href="#">Send a Message</a>
            </article>
          </div>

          <form action="">
            <input
              type="text"
              name="your_name"
              id="your_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your E-mail"
              required
            />
            <textarea
              name="msg"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
