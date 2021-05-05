import React from "react";
import "../../assets/styles/components/layout/contacme.scss";

import { Mail } from "react-ionicons";
import Button from "../Button";
import { actionButton } from "../../helpers/analytics";
import { shortButton } from "../../helpers/home";
import IconButton from "../IconButton";

const Contacme = () => {
  return (
    <section className="contacme">
      <h3 className="txt secondaryTitle">Need help with your project?</h3>
      <div>
        <p className="txt subtitle">
          Occasionally, I am available to carry out projects as a freelancer.
        </p>
        <p className="txt subtitle">Send me a message, let's chat.</p>
      </div>
      <Button
        icon={<Mail />}
        title="Contact me"
        value="Contact me"
        url="mailto:rafavilomar@gmail.com"
        externalURL
        onClick={() =>
          actionButton("Main button", 'Clik on button "Contac me"')
        }
      />
      <div className="social" >
      {shortButton.map((e) => (
        <IconButton
          key={e.title}
          icon={e.icon}
          url={e.url}
          title={e.title}
          externalURL={e.externalURL}
          style={{height: 45, width: 45}}
          ttDirection='down'
          ttValue={e.title}
          onClick={() =>
            actionButton("Icon button", e.title)
          }
        />
      ))}
      </div>
    </section>
  );
};
export default Contacme;
