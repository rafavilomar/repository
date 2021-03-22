import React from "react";
import "../assets/styles/container/about.scss";
import ClientList from "../components/ClientList";

import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import Learning from "../components/Learning";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ShortButton />
      <section className="basicInformation">
        <img
          src="https://images.pexels.com/photos/6833449/pexels-photo-6833449.jpeg?cs=srgb&dl=pexels-dimitry-zub-6833449.jpg&fm=jpg"
          alt="profile"
        />
        <div>
          <h2 className="txt mainTitle-secondary">Rafael Vilomar</h2>
          <h3 className="txt secondaryTitle">Web Developer</h3>
          <p className="txt body">
            I'm Rafael, a Web Developer and this is my personal corner on the
            Web City. Here you can find information about me, how contact me and
            explore my repositories.
          </p>
          <p className="txt body">
            I'm Rafael, a Web Developer and this is my personal corner on the
            Web City. Here you can find information about me, how contact me and
            explore my repositories.
          </p>
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
