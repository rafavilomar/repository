import React from "react";
import "../../assets/styles/components/layout/contacme.scss";

import { Mail } from "react-ionicons";
import Button from "../Button";

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
      <Button icon={<Mail />} value="Contact me" />
    </section>
  );
};
export default Contacme;
