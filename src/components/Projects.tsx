import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/cardProject.scss";
import { projectList } from "../helpers/projects";
import Tag from "./Tag";

const Projects = () => {
  return (
    <section className="projects">
      <h3 className="projects-title txt mainTitle-secondary">Projects</h3>
      <div className="project-list">
        {projectList.map(project => (
          <Link to={`/${project.id}`} className="bigCardProject">
            <div className="presentation">
              <img src={project.presentationImg} alt="presentation" />
            </div>
            <div className="information">
              <h4 className="txt subtitle">{project.name}</h4>
              <p className="txt body">{project.description}</p>
              <div className="information__technologies">
                {project.tools.map(tool => <Tag content={tool} />)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Projects;
