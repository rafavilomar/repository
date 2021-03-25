import React from "react";
import { LogoGithub } from "react-ionicons";
import "../assets/styles/container/projectsDetails.scss";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";

type props = {
  match: any;
};

const ProjectDetails: React.FC<props> = ({ match }) => {
  React.useEffect(() => {
    console.log(match.params.project_id);
  }, [match]);
  return (
    <>
      <Header />
      <ShortButton />
      <section className="project">
        <div className="project__data">
          <h3 className="txt mainTitle-secondary">Name project</h3>
          <h5 className="txt secondaryTitle">Category - 2021</h5>
          <div>
            <IconButton variant="secondary" icon={<LogoGithub />} />
            <IconButton variant="secondary" icon={<LogoGithub />} />
            <Button value="Live" />
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/3582616/screenshots/14512060/media/973c4ccd1c030405d42f41bb47b7bf2b.png?compress=1&resize=400x300"
          alt="presentation"
        />
      </section>
      {[1, 1].map(() => (
        <section key="" className="project-section">
          <div>
            <h4 className="txt subtitle">Subtitle</h4>
            {[1, 1, 1].map(() => (
              <p className="txt body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione deserunt, at nostrum impedit blanditiis minima facilis
                expedita tenetur accusantium error, modi sint quaerat sunt nihil
                repellat. Rerum, corrupti! Necessitatibus, fugit.
              </p>
            ))}
          </div>
          <img
            src="https://cdn.dribbble.com/users/3582616/screenshots/14512060/media/973c4ccd1c030405d42f41bb47b7bf2b.png?compress=1&resize=400x300"
            alt="example"
          />
        </section>
      ))}
      <Contacme />
    </>
  );
};
export default ProjectDetails;
