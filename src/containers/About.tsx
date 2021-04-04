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
    document.title = "About | Rafael Vilomar";
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
            I live in my hometown Santo Domingo, Dominican Republic, where I am
            also studying software engineering at UAPA.
          </p>
          <p className="txt body">
            I got to know the world of development when I was 14–15 years old,
            since then my curiosity has led me to learn more and more. At 16, I
            finished my high school studies as a computer technician and at 18 I
            finished my studies in ITLA as a Software Developer.
          </p>
          <p className="txt body">
            Lately I have dedicated my time to research about design,
            prototyping, UI and UX.
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
