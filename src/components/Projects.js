import React, { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const clickHandler = (event) => {
    const newProject = projects.find(
      (project) => project.title === event.target.value,
    );
    setCurrentProject(newProject);
  };

  const projectsList = () => {
    return projects.map((project) => {
      const active =
        project.title === currentProject.title
          ? "nav-link active"
          : "nav-link text-secondary";

      return (
        <li className="nav-item" key={project.title}>
          <button
            className={active}
            value={project.title}
            onClick={clickHandler}
          >
            {project.title}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="container my-5" id="projects">
      <h2>
        Projects <i className="bi bi-body-text"></i>
      </h2>
      <div className="card text-center mt-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">{projectsList()}</ul>
        </div>
        <div className="card-body">
          <h3 className="card-title">{currentProject.title}</h3>
          <h6 className="card-text">{currentProject.description}</h6>
          <p>{currentProject.technology.join(" | ")}</p>
          <a href={currentProject.link} className="btn btn-info">
            Link to GitHub Repo
          </a>
        </div>
        <img
          src={currentProject.photo}
          style={{ width: "90%" }}
          className="mx-auto mb-3"
        />
      </div>
    </div>
  );
}
