import { React, useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygmkpm8",
        "template_m62bp33",
        form.current,
        "GZ7AVo1o9uF_x99TQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              id="name"
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
              name="message"
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
