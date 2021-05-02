import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";
import "../../assets/styles/container/projects/369labs.scss";

import Header from "../../components/layout/Header";
import ProjectPresentation from "../../components/ProjectPresentation";
import { project, projectList } from "../../helpers/projects";

import Contacme from "../../components/layout/Contacme";
import Square from "../../components/lazy/Square";
import Summary from "../../components/layout/Summary";

const Imagen = lazy(() => import("../../components/layout/images"));

const _369labs = () => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "369labs | Rafael Vilomar";
    setProjectDetails(projectList[0]);
    ReactGA.pageview("/369labs");
  }, []);

  return (
    <>
      <Header />
      <ProjectPresentation
        name={projectDetails?.name}
        category={projectDetails?.category}
        date={projectDetails?.date}
        img={projectDetails?.presentationImg}
        behance={projectDetails?.behance}
        github={projectDetails?.github}
        live={projectDetails?.live}
      />

      <section
        className="project-section"
        id={projectDetails?.section[0].title}
      >
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[0].title}</h4>
          {projectDetails?.section[0].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
        <section className="forms">
          {projectDetails?.section[0].image?.map((image) => (
            <Suspense fallback={<Square />} key={image.alt}>
              <Imagen src={image.src} alt={image.alt} key={image.alt} />
            </Suspense>
          ))}
        </section>
      </section>

      <section
        className="project-section"
        id={projectDetails?.section[0].title}
      >
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[1].title}</h4>
          {projectDetails?.section[1].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[2].title}</h4>
          {projectDetails?.section[2].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
      </section>
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
export default _369labs;
