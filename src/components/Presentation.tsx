import React from "react";

import "../assets/styles/components/presentation.scss";
import Button from "./Button";
import profile from "../assets/imgs/brand/profile.jpeg";

import { secondaryButton, shortButton } from "../helpers/home";
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
            I'm a software engineer with a passion for leveraging cutting-edge 
            technologies and implementing innovative solutions, I thrive in dynamic 
            and challenging environments.
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
          {/* ===== Stay Focus and #100 Days of Code ===== */}
          {/* <div>
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
          </div> */}
        </div>
        {/* <div className="presentation__action">
          <Button value="Projects" url='/projects' onClick={()=> actionButton("Main button", 'Clik on button "Projects"')} />
        </div> */}
      </div>
    </section>
  );
};
export default Presentation;
