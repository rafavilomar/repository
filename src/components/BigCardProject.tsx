import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/cardProject.scss";
import { projectList } from "../helpers/projects";

const BigCardProject = () => {
  return (
    <Link to={`/${projectList[0].id}`} className="bigCardProject">
      <div>
        <h4 className="txt mainTitle-secondary">{projectList[0].name}</h4>
        <h5 className="txt secondaryTitle">- {projectList[0].date}</h5>
      </div>
      <img src={projectList[0].presentationImg} alt="presentation" />
    </Link>
  );
};
export default BigCardProject;
