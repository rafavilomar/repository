import React, { lazy, Suspense } from "react";
import ReactGA from 'react-ga' 
import "../../assets/styles/container/projects/social.scss";

import Header from "../../components/layout/Header";
import ShortButton from "../../components/layout/ShortButton";
import ProjectPresentation from "../../components/ProjectPresentation";

import Contacme from "../../components/layout/Contacme";
import { project, projectList } from "../../helpers/projects";
import Square from "../../components/lazy/Square";

const Imagen = lazy(() => import("../../components/layout/images"));

const Vyrx_app = () => {
    const [projectDetails, setProjectDetails] = React.useState<project>();
    React.useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "VYR-X APP | Rafael Vilomar";
      setProjectDetails(projectList[1]);
      ReactGA.pageview('/vyrx-app');
    },[]);
    
  return (
    <>
      <Header />
      <ShortButton />
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
        <section className="social-screens">
          {projectDetails?.section[0].image?.map((image) => (
            <Suspense fallback={<Square />} key={image.alt}>
              <Imagen src={image.src} alt={image.alt}  key={image.alt} />
            </Suspense>
          ))}
        </section>
      </section>
      <Contacme />
    </>
  );
};
export default Vyrx_app;