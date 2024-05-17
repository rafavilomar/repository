import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";
import "../../assets/styles/container/projects/369labs.scss";

import Header from "../../components/layout/Header";
import ProjectPresentation from "../../components/ProjectPresentation";
import { project, projectList } from "../../helpers/projects";

import Contacme from "../../components/layout/Contacme";
import Summary from "../../components/layout/Summary";
import ProjectSection from "../../components/ProjectSection";


const SpringbootMicroservices = () => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SpringBoot Microservices | Rafael Vilomar";
    setProjectDetails(projectList[1]);
    ReactGA.pageview("/springboot-microservices");
  }, []);

  return (
    <>
      <Header />
      <ProjectPresentation
        name={projectDetails?.name}
        category={projectDetails?.category}
        date={projectDetails?.date}
        behance={projectDetails?.behance}
        github={projectDetails?.github}
        live={projectDetails?.live}
      />

      {projectDetails && projectDetails.section.map(
        (section, index) => (<ProjectSection section={section} key={index} />)
      )}

      <Summary
        name={projectDetails?.name}
        date={projectDetails?.date}
        behance={projectDetails?.behance}
        github={projectDetails?.github}
        live={projectDetails?.live}
        role={projectDetails ? projectDetails.role : []}
        tools={projectDetails ? projectDetails.tools : []}
      />

      <Contacme />
    </>
  );
};
export default SpringbootMicroservices;
