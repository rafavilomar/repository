import React from "react";
import { LogoBehance, LogoGithub } from "react-ionicons";
import "../../assets/styles/components/layout/summary.scss";
import { actionButton } from "../../helpers/analytics";
import Button from "../Button";
import IconButton from "../IconButton";

type props = {
  name?: string;
  role: string[];
  date?: string;
  tools: string[];
  github?: string;
  behance?: string;
  live?: string;
};

const Summary: React.FC<props> = ({
  name,
  role,
  date,
  tools,
  github,
  behance,
  live,
}) => {
  return (
    <section className="summary">
      <div>
        <h4 className="txt subtitle">Project</h4>
        <p className="txt body">{name}</p>
      </div>
      <div>
        <h4 className="txt subtitle">Role</h4>
        {role.map((e, index) => (
          <p key={index} className="txt body">{e}</p>
        ))}
      </div>
      <div>
        <h4 className="txt subtitle">Date</h4>
        <p className="txt body">{date}</p>
      </div>
      <div>
        <h4 className="txt subtitle">Tools</h4>
        <ul className="tools">
          {tools.map((e, index) => (
            <li key={index} className="txt body">{e}</li>
          ))}
        </ul>
      </div>
      <div className="actions">
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
            onClick={() => actionButton("Main button", 'Clik on button "Live"')}
          />
        )}
      </div>
    </section>
  );
};
export default Summary;
