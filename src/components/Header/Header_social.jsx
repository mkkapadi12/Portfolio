import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header_social = () => {
  return (
    <>
      <div className="header_social">
        <a href="https://www.linkedin.com/in/mayurkapadi24/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com\mkkapadi12" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default Header_social;
