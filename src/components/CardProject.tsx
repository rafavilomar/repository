import React from "react";
import "../assets/styles/components/cardProject.scss";

import { project } from "../helpers/projects";

import { LogoDribbble, LogoGithub, Wifi } from "react-ionicons";
import Button from "./Button";
import IconButton from "./IconButton";

type props = {
  project: project;
};

const CardProject: React.FC<props> = ({ project }) => {
  return (
    <article className="cardProject">
      <div className="cardProject__head">
        {project.dribbble && (
          <IconButton
            variant="secondary"
            icon={<LogoDribbble />}
            externalURL
            url={project.dribbble}
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
          <IconButton icon={<Wifi />} externalURL url={project.live} />
        )}
        <Button value="Detalles" url={`/${project.id}`} />
      </div>
    </article>
  );
};
export default CardProject;
