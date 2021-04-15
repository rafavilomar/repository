import React, { lazy, Suspense } from "react";
import "../assets/styles/container/projectsDetails.scss";

import { LogoBehance, LogoGithub } from "react-ionicons";
import Button from "./Button";
import IconButton from "./IconButton";
import { actionButton } from "../helpers/analytics";
import Square from "./lazy/Square";

const Imagen = lazy(() => import("../components/layout/images"));

type props = {
  name?: string;
  category?: string;
  date?: string;
  behance?: string;
  github?: string;
  live?: string;
  img?: any;
};

const ProjectPresentation: React.FC<props> = ({
  name,
  category,
  date,
  behance,
  github,
  live,
  img,
}) => {
  return (
    <section className="project">
      <div className="project__data">
        <h3 className="txt mainTitle-secondary">{name}</h3>
        <h5 className="txt secondaryTitle">
          {category} - {date}
        </h5>
        <div>
          {behance && (
            <IconButton
              variant="secondary"
              externalURL
              url={behance}
              icon={<LogoBehance />}
            />
          )}
          {github && (
            <IconButton
              variant="secondary"
              externalURL
              url={github}
              icon={<LogoGithub />}
            />
          )}
          {live && (
            <Button
              value="Live"
              externalURL
              url={live}
              onClick={() =>
                actionButton("Main button", 'Clik on button "Live"')
              }
            />
          )}
        </div>
      </div>
      {/* <img src={img} alt="presentation" /> */}
            <Suspense fallback={<Square />}>
              <Imagen src={img} alt="presentation" />
            </Suspense>
    </section>
  );
};
export default ProjectPresentation;
