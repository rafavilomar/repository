import React from "react";

import "../assets/styles/components/presentation.scss";
import Button from "./Button";

import { secondaryButton } from "../helpers/home";
import { actionButton } from "../helpers/analytics";

const Presentation = () => {

  return (
    <section className="presentation">
      <div className="brand">
        <div className="first"></div>
        <div className="second"></div>
      </div>
      <div className="information">
      <div className="presentation__nickname">
        <h1 className="txt mainTitle-primary">@rafavilomar</h1>
      </div>
      <div className="presentation__details">
        <p className="txt body">
          I'm Rafael, a Web Developer and this is my personal corner on the Web
          City. Here you can find information about me, how contact me and
          explore my repositories.
        </p>
        <div>
          {secondaryButton.map((e) => (
            <Button
              key={e.title}
              value={e.value}
              icon={e.icon}
              url={e.url}
              title={e.title}
              variant="secondary"
              externalURL={e.externalURL}
              ttDirection='right'
              ttValue={e.title}
            />
          ))}
        </div>
      </div>
      <div className="presentation__action">
        <Button value="Projects" url='/projects' onClick={()=> actionButton("Main button", 'Clik on button "Projects"')} />
      </div>
      </div>
    </section>
  );
};
export default Presentation;
