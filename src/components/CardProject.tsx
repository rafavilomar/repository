import React from "react";
import "../assets/styles/components/cardProject.scss";

import { LogoGithub } from "react-ionicons";
import Button from "./Button";
import IconButton from "./IconButton";

const CardProject = () => {
  return (
    <article className="cardProject">
      <div className="cardProject__head">
        <IconButton variant="secondary" icon={<LogoGithub />} />
        <IconButton variant="secondary" icon={<LogoGithub />} />
      </div>
      <img
        className="cardProject__image"
        src="https://cdn.dribbble.com/users/3582616/screenshots/14512060/media/973c4ccd1c030405d42f41bb47b7bf2b.png?compress=1&resize=400x300"
        alt=""
      />
      <h5 className="txt subtitle">Name Project</h5>
      <div className="cardProject__footer">
        <IconButton icon={<LogoGithub />} />
        <Button value="Detalles" />
      </div>
    </article>
  );
};
export default CardProject;
