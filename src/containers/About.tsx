import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";

import "../assets/styles/container/about.scss";
import ClientList from "../components/ClientList";

import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import { actionButton } from "../helpers/analytics";
import Square from "../components/lazy/Square";
import Learning from "../components/Learning";

import profile from "../assets/imgs/brand/profile.jpg";
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
            I live in my hometown Santo Domingo, Dominican Republic, where I am
            also studying software engineering at UAPA.
          </p>
          <p className="txt body">
            I'm a Designer & Front-end Developer with experience of
            applications and web pages, creating interfaces and improving the
            user experience. Able to work on frontend technologies, responsive
            interface, project management and adapt to the circumstances and
            needs of the work team.
          </p>
          <Button
            icon={<Download />}
            title="Download CV"
            value="Download CV"
            url="https://drive.google.com/file/d/1WQQNIG46h532fjv0OfjTvVKkeLhfaXNW/view"
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
