import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/cardProject.scss";
import { projectList } from "../helpers/projects";

const BigCardProject = () => {
  return (<section className="featuredProjects">
    {projectList.map(project => (
      <Link to={`/${project.id}`} className="bigCardProject">
        <div className="presentation">
          <img src={project.presentationImg} alt="presentation" />
        </div>
        <div className="information">
          <h4 className="txt mainTitle-secondary">{project.name}</h4>
          <p className="txt secondaryTitle">{project.description}</p>
          <div className="information__technologies">
            {project.tools.map(tool => (
              <span>{tool}</span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </section>);
};
export default BigCardProject;
