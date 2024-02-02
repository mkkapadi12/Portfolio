import React from "react";
import "./About.css";
import Photo from "../../assets/m.jpg";
// import { FaAward } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa6";
// import { VscFolderLibrary } from "react-icons/vsc";

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
            {/* <div className="cards">
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
            </div> */}
            <p>
              My name is Mayur Kapadi. I'm a B.Tech student at Government
              Engineering College, Gandhinagar Computer Engineering Department. I
              was born and raised in Gujarat.
            </p>
            <p>
              I love to do programming , Web development including both
              front-end and backend and also intrested in Web Developer. I am
              very passionate about programming and engineering as a whole.
            </p>
            <p>
              I like to travel. I believe travelling gives you a new perspective
              to everything. You get to know a lot about the different cultures,
              the cuisines, their history, the language and all the small unique
              things every place has to offer.
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
