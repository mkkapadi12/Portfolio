import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const getyear = new Date().getFullYear();

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
          <li>
            <a href="#Project">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="social_link">
          <a
            href="https://www.instagram.com/mk_mayur_24/"
            className="social_icon"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="#" className="social_icon" target="_blank">
            <FiFacebook />
          </a>
          <a href="#" className="social_icon">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/mayurkapadi24/"
            className="social_icon"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="#" className="social_icon">
            <FaWhatsapp />
          </a>
        </div>
        <div className="copyright">
          &copy; Mayur Kapadi {getyear} All rights reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
