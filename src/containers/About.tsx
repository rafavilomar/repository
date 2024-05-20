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
            Hello! I'm Rafael Vilomar, a dedicated Software Engineer with a passion for backend development. Over the years, I've honed my skills in various frameworks and tools, including NodeJS, Express, NestJS, Redis, MongoDB, and Spring Boot, among others. My expertise also extends to developing and maintaining microservices architectures, ensuring scalability, security, and efficiency.
          </p>
          <p className="txt body">
            Currently, I work as a Senior Software Engineer at Stefanini with a high projects ownership for diverse clients.
          </p>
          <p className="txt body">
            On this website, I plan to show my knowledge through different side projects.
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
