import React from "react";
import "../assets/styles/container/projects.scss";

import CardProject from "../components/CardProject";
import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ShortButton />
      <section className="projects">
        {[1, 1, 1, 1].map((e) => (
          <CardProject />
        ))}
      </section>
      <Contacme />
    </>
  );
};
export default Projects;
