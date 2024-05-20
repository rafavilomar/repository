import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga";
import "../../assets/styles/container/projects/vyrx_app.scss";

import Header from "../../components/layout/Header";
import ProjectPresentation from "../../components/ProjectPresentation";

import Contacme from "../../components/layout/Contacme";
import { project, projectList } from "../../helpers/projects";
import Square from "../../components/lazy/Square";
import Summary from "../../components/layout/Summary";

const Imagen = lazy(() => import("../../components/layout/images"));

const StayFocus = () => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Stay Focus | Rafael Vilomar";
    setProjectDetails(projectList[3]);
    ReactGA.pageview("/stay-focus");
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
      <section className="project-section">
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[0].title}</h4>
          {projectDetails?.section[0].paragraphs.map((e, index) => (
            <p key={index} className="txt body"> {e} </p>
          ))}
        </div>
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[1].title}</h4>
          {projectDetails?.section[1].paragraphs.map((e, index) => (
            <p key={index} className="txt body"> {e} </p>
          ))}
        </div>
        <section className="vyrx_app-screens">
          {projectDetails?.section[1].image?.map((image) => (
            <Suspense fallback={<Square />} key={image.alt}>
              <Imagen src={image.src} alt={image.alt} key={image.alt} />
            </Suspense>
          ))}
        </section>
      </section>
      <section className="project-section">
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[2].title}</h4>
          {projectDetails?.section[2].paragraphs.map((e, index) => (
            <p key={index} className="txt body"> {e} </p>
          ))}
        </div>
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[3].title}</h4>
          {projectDetails?.section[3].paragraphs.map((e, index) => (
            <p key={index} className="txt body"> {e} </p>
          ))}
        </div>
        <section className="vyrx_app-screens">
          {projectDetails?.section[3].image?.map((image) => (
            <Suspense fallback={<Square />} key={image.alt}>
              <Imagen src={image.src} alt={image.alt} key={image.alt} />
            </Suspense>
          ))}
        </section>
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
export default StayFocus;
