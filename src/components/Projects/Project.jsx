import React from "react";
import "./Project.css";
import Pro1 from "../../assets/E-commerce1.jpg";
import Pro2 from "../../assets/budget1.jpg";
import Pro3 from "../../assets/FreshStart.png";

const data = [
  {
    id: "1",
    image: Pro1,
    title: "E - commerce",
    github: "https://github.com/mkkapadi12/mayurEcommerce",
    demo: "https://mayuronlineshop.vercel.app",
  },
  {
    id: "2",
    image: Pro2,
    title: "Budget App",
    github: "https://github.com/mkkapadi12/budget-app",
    demo: "https://maintainyourbudget.vercel.app",
  },
  {
    id: "3",
    image: Pro3,
    title: "Fresh start",
    github: "https://github.com/mkkapadi12/FreshStart",
    demo: "https://fresh-start-rahulpanchal0106.vercel.app/",
  },
];

const Project = () => {
  return (
    <>
      <section id="Project" className="container">
        <h5>My Recent Work</h5>
        <h2>Portfoilio</h2>
        <div className="project_container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_img">
                  <img src={image} alt="project_img" />
                </div>
                <h3 className="project_title">{title}</h3>
                <div className="git">
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                  <a href={github} className="btn" target="_blank">
                    Git Hub
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Project;
