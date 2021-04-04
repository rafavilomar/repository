import React from "react";
import "../../assets/styles/container/projects/369labs.scss";

import Header from "../../components/layout/Header";
import ShortButton from "../../components/layout/ShortButton";
import ProjectPresentation from "../../components/ProjectPresentation";
import { project, projectList } from "../../helpers/projects";

// ------------ IMAGES ---------------
import _369labs__presentation from "../../assets/imgs/projects/369labs/369labs-presentation.png";
import _369labs__preview from "../../assets/imgs/projects/369labs/369labs-preview.png";
import _369labs_investor from "../../assets/imgs/projects/369labs/investor-form.png";
import _369labs_partner from "../../assets/imgs/projects/369labs/partner-form.png";
import Contacme from "../../components/layout/Contacme";

const _369labs = () => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  React.useEffect(() => {
    setProjectDetails(projectList[0]);
  });

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
        <section className="forms">
          {projectDetails?.section[0].image.map((image) => (
            <img src={image} alt="example" />
          ))}
        </section>
      </section>
      <Contacme />
    </>
  );
};
export default _369labs;
