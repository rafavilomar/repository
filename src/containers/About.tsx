import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";

import "../assets/styles/container/about.scss";
import ClientList from "../components/ClientList";

import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import { actionButton } from "../helpers/analytics";
import Square from "../components/lazy/Square";
import TechStack from "../components/TechStack";

import profile from "../assets/imgs/brand/profile.jpeg";
import Button from "../components/Button";
import { Download } from "react-ionicons";

const Imagen = lazy(() => import("../components/layout/images"));

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Rafael Vilomar";
    ReactGA.pageview("/about");
  }, []);
  return (
    <>
      <Header />
      <section className="basicInformation">
        <Suspense fallback={<Square />}>
          <Imagen src={profile} alt="profile" />
        </Suspense>
        <div>
          <h2 className="txt mainTitle-secondary">Rafael Vilomar</h2>
          <h3 className="txt secondaryTitle">Software Engineer</h3>
          <p className="txt body">
            I'm a software engineer with a passion for leveraging cutting-edge technologies and implementing innovative solutions, I thrive in dynamic and challenging environments.
          </p>
          <p className="txt body">
            Throughout my career, I have demonstrated expertise in designing and building web platforms and applications. My strong background in microservice architecture has enabled me to handle complex and large projects. I have a proven track record of analyzing requirements, leading sub-projects, and delivering comprehensive documentation to ensure seamless collaboration across teams and stakeholders.
          </p>
          <Button
            icon={<Download />}
            title="Download CV"
            value="Download CV"
            url="https://drive.google.com/file/d/1zD5dIk9kFFaL_L5_ftexR7fUJ6ea4vkS/view?usp=sharing"
            externalURL
            onClick={() =>
              actionButton("Main button", 'Clik on button "Download CV"')
            }
          />
        </div>
      </section>
      <section className="listAbout">
        <ClientList />
        <TechStack />
      </section>
      <Contacme />
    </>
  );
};
export default About;
