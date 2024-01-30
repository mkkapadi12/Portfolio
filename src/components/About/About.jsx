import React from "react";
import "./About.css";
import Photo from "../../assets/m.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <section id="about" className="container">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="about_container">
          <div className="about_me">
            <div className="about_me-img">
              <img src={Photo} alt="about_me" />
            </div>
          </div>
          <div className="about_content">
            <div className="cards">
              <article className="about__card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>3+ years working</small>
              </article>
              <article className="about__card">
                <FaUsers className="about_icon" />
                <h5>Clients</h5>
                <small>200+ Clients</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur harum assumenda pariatur, numquam quod eveniet!
              Repudiandae, tempora saepe voluptate quos sint deserunt nobis
              nesciunt ex soluta tenetur eaque numquam omnis.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
