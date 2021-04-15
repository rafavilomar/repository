import React from "react";
import ReactGA from 'react-ga' 
import "../assets/styles/container/projects.scss";

import CardProject from "../components/CardProject";
import Contacme from "../components/layout/Contacme";
import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import { projectList } from "../helpers/projects";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects | Rafael Vilomar";
    ReactGA.pageview('/projects');
  }, []);
  return (
    <>
      <Header />
      <ShortButton />
      <section className="projects">
        {projectList.map((project) => <CardProject key={project.id} project={project} /> )}
      </section>
      <Contacme />
    </>
  );
};
export default Projects;
