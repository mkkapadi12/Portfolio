import React from "react";
import "./Services.css";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <section id="services" className="container">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="ser_container">
          <article className="service">
            <div className="ser_head">
              <h3>UI/UX design</h3>
            </div>
            <ul className="ser_list">
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="ser_head">
              <h3>Web Development</h3>
            </div>
            <ul className="ser_list">
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="ser_head">
              <h3>Content Creation</h3>
            </div>
            <ul className="ser_list">
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <FaCheck className="ser_icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
