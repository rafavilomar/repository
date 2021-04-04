import React from "react";
import "../../assets/styles/container/projects/social.scss";

import Header from "../../components/layout/Header";
import ShortButton from "../../components/layout/ShortButton";
import ProjectPresentation from "../../components/ProjectPresentation";

import Contacme from "../../components/layout/Contacme";
import { project, projectList } from "../../helpers/projects";

const Social = () => {
    const [projectDetails, setProjectDetails] = React.useState<project>();
    React.useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Social Dashboard | Rafael Vilomar";
      setProjectDetails(projectList[1]);
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
          {projectDetails?.section[0].image.map((image) => (
            <img src={image} alt="example" />
          ))}
        </section>
      </section>
      <Contacme />
    </>
  );
};
export default Social;
