import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className="container">
        <div className="logo">
          <h3>
            May<span>ur</span>
            <span> </span>
            Kapa
            <span>di</span>
          </h3>
        </div>
        <ul className="footer_link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#Project">Portfolio</a>
          </li>
          {/* <li>
            <a href="#Testimonials">Testimonials</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="social_link">
          <a href="#" className="social_icon">
            <FaInstagram />
          </a>
          <a href="#" className="social_icon">
            <FiFacebook />
          </a>
          <a href="#" className="social_icon">
            <FaXTwitter />
          </a>
          <a href="#" className="social_icon">
            <FaLinkedin />
          </a>
          <a href="#" className="social_icon">
            <FaWhatsapp />
          </a>
        </div>
        <div className="copyright">
          &copy; Mayur Portfolio. All rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
