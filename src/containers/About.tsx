import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";

import "../assets/styles/container/about.scss";
import ClientList from "../components/ClientList";

import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import { actionButton } from "../helpers/analytics";
import Square from "../components/lazy/Square";
import Learning from "../components/Learning";

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
          <h3 className="txt secondaryTitle">{`Designer & front-end developer`}</h3>
          <p className="txt body">
            {`Designer & Front-end Developer with experience of applications and web pages, creating responsive interfaces and improving the user experience.`}
          </p>
          <p className="txt body">
            Love UI / UX design and create products using tools like: Figma,
            ReactJS and React Native.
          </p>
          <p className="txt body">
            I'm also studying software engineering at UAPA, front-end technology
            at Platzi, and challenging my skills in my free time.
          </p>
          <Button
            icon={<Download />}
            title="Download CV"
            value="Download CV"
            url="https://drive.google.com/file/d/1EjopcXAtDM_iHaUx1ZLX1HTxcbn5rY_-/view?usp=sharing"
            externalURL
            onClick={() =>
              actionButton("Main button", 'Clik on button "Download CV"')
            }
          />
        </div>
      </section>
      <section className="listAbout">
        <ClientList />
        <Learning />
      </section>
      <Contacme />
    </>
  );
};
export default About;
