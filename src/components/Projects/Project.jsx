import React from "react";
import "./Project.css";
import Pro1 from "../../assets/Cara1.png";
import Pro2 from "../../assets/Todo1.png";
import Pro3 from "../../assets/HairStudio1.png";
import Pro4 from "../../assets/news.png";
import Pro5 from "../../assets/FreshStart.png";
import Pro6 from "../../assets/NsPark.png";

const data = [
  {
    id: "1",
    image: Pro1,
    title: "Cara - shopping Site",
    github: "https://github.com/mkkapadi12/mayurcarashopping",
    demo: "https://mkkapadi12.github.io/mayurcarashopping/",
  },
  {
    id: "2",
    image: Pro2,
    title: "To Do List - React App",
    github: "https://github.com/mkkapadi12/todo_list",
    demo: "",
  },
  {
    id: "3",
    image: Pro3,
    title: "Hair Studio",
    github: "",
    demo: "https://mayurkapadihairstudio.netlify.app/",
  },
  {
    id: "4",
    image: Pro4,
    title: "React - News App",
    github: "https://github.com/mkkapadi12/newsmonkeyapp",
    demo: "",
  },
  {
    id: "5",
    image: Pro5,
    title: "Fresh Start",
    github: "https://github.com/mkkapadi12/FreshStart",
    demo: "https://fresh-start-rahulpanchal0106.vercel.app/index.html",
  },
  {
    id: "6",
    image: Pro6,
    title: "Ns Park Infotech",
    github: "",
    demo: "https://nsparkinfotech.netlify.app/",
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
