import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/cardProject.scss";
import { projectList } from "../helpers/projects";

const BigCardProject = () => {
  return (
    <Link to={`/${projectList[1].id}`} className="bigCardProject">
      <div>
        <h4 className="txt mainTitle-secondary">Vyr-x App</h4>
        <h5 className="txt secondaryTitle">- {projectList[1].date}</h5>
      </div>
      <img src={projectList[1].presentationImg} alt="presentation" />
    </Link>
  );
};
export default BigCardProject;
