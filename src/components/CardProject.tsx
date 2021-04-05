import React from "react";
import "../assets/styles/components/cardProject.scss";

import { project } from "../helpers/projects";

import { LogoBehance, LogoGithub, Wifi } from "react-ionicons";
import Button from "./Button";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";

type props = {
  project: project;
};

const CardProject: React.FC<props> = ({ project }) => {
  return (
    <Link to={`/${project.id}`} className="cardProject">
      <div className="cardProject__head">
        {project.behance && (
          <IconButton
            variant="secondary"
            icon={<LogoBehance />}
            externalURL
            url={project.behance}
          />
        )}
        {project.github && (
          <IconButton
            variant="secondary"
            icon={<LogoGithub />}
            externalURL
            url={project.github}
          />
        )}
      </div>
      <img
        className="cardProject__image"
        src={project.previewImg}
        alt="presentation"
      />
      <h5 className="txt subtitle">{project.name}</h5>
      <div className="cardProject__footer">
        {project.live && (
          <IconButton icon={<Wifi />} externalURL url={project.live} ttValue='Live' />
        )}
        <Button value="Detalles" url={`/${project.id}`} />
      </div>
    </Link>
  );
};
export default CardProject;
