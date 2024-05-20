import React from "react";

import "../assets/styles/components/presentation.scss";
import profile from "../assets/imgs/brand/profile.jpeg";

import { shortButton } from "../helpers/home";
import { actionButton } from "../helpers/analytics";
import Images from "./layout/images";
import IconButton from "./IconButton";

const Presentation = () => {

  return (
    <section className="presentation">
      <div className="information">
        <div className="presentation__nickname">
          <h1 className="txt mainTitle-primary">@rafavilomar</h1>
        </div>
        <div className="presentation__details">
          <Images src={profile} alt="Profile" className="profile" />
          <p className="txt body">
            I'm a Software Engineer, focused on Backend Development, with +4 years 
            of experience with many clients and industries in LATAM. 
            My stack includes techs like NodeJS, SpringBoot and multiple databases.
          </p>
          <div className="contact">
            <h3 className="txt subtitle">
              Contact me!
            </h3>
            <section className="contact__options">
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
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
