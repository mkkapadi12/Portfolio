import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/m2.jpg";
import HeaderSocial from "./Header_social";
// import { useState } from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm </h5>
          <h1>Mayur Kapadi</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
            <img src={Me} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
