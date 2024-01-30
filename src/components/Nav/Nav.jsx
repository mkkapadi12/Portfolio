import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { LuHeartHandshake } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="navbar">
        <nav>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            <LuHeartHandshake />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
