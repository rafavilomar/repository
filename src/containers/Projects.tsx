import React, { Suspense } from "react";
import ReactGA from "react-ga";
import "../assets/styles/container/projects.scss";

import CardProject from "../components/CardProject";
import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import Square from "../components/lazy/Square";
import { projectList } from "../helpers/projects";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects | Rafael Vilomar";
    ReactGA.pageview("/projects");
  }, []);
  return (
    <>
      <Header />
      <section className="projects">
        {projectList.map((project) => (
          <Suspense key={project.id} fallback={<Square secondaryClass='cardProject' />}>
            <CardProject key={project.id} project={project} />
          </Suspense>
        ))}
      </section>
      <Contacme />
    </>
  );
};
export default Projects;
