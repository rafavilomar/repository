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

const Vyrx_app = () => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "VYR-X APP | Rafael Vilomar";
    setProjectDetails(projectList[1]);
    ReactGA.pageview("/vyrx-app");
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
          {projectDetails?.section[0].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[1].title}</h4>
          {projectDetails?.section[1].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
        <section className="vyrx_app-sketchs">
          {projectDetails?.section[1].image?.map((image) => (
            <Suspense fallback={<Square />} key={image.alt}>
              <div
                style={{ overflow: "hidden" }}
                className={image.class}
                key={image.alt}
              >
                <Imagen
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  className={image.class}
                />
              </div>
            </Suspense>
          ))}
        </section>
      </section>
      <section className="project-section">
        <div>
          <h4 className="txt subtitle">{projectDetails?.section[2].title}</h4>
          {projectDetails?.section[2].paragraphs.map((e) => (
            <p className="txt body"> {e} </p>
          ))}
        </div>
        <section className="vyrx_app-screens">
          {projectDetails?.section[2].image?.map((image) => (
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
export default Vyrx_app;
