import React from "react";
import { LogoDribbble, LogoGithub } from "react-ionicons";
import "../assets/styles/container/projectsDetails.scss";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import { project, projectList } from "../helpers/projects";
import NotFound from "./NotFound";

type props = {
  match: any;
};

const ProjectDetails: React.FC<props> = ({ match }) => {
  const [projectDetails, setProjectDetails] = React.useState<project>();
  const getProject = () => {
    setProjectDetails(
      projectList.filter((project) => project.id === match.params.project_id)[0]
    );
    console.log(projectDetails);
  };

  React.useEffect(() => {
    getProject()
    window.scrollTo(0, 0);
  }, [match]);
  return (<>
    {projectDetails ? (
      <>
      <Header />
      <ShortButton />
      <section className="project">
        <div className="project__data">
          <h3 className="txt mainTitle-secondary">{projectDetails?.name}</h3>
          <h5 className="txt secondaryTitle">{projectDetails?.category} - {projectDetails?.date}</h5>
          <div>
            {projectDetails?.dribbble && <IconButton variant="secondary" externalURL url={projectDetails?.dribbble} icon={<LogoDribbble />} />}
            {projectDetails?.github && <IconButton variant="secondary" externalURL url={projectDetails?.github} icon={<LogoGithub />} />}
            {projectDetails?.live && <Button value="Live" externalURL url={projectDetails?.live}/> }
          </div>
        </div>
        <img
          src={projectDetails?.presentationImg}
          alt="presentation"
        />
      </section>
      {projectDetails?.section.map((section) => (
        <section key="" className="project-section">
          <div>
            <h4 className="txt subtitle">{section.title}</h4>
            {section.paragraphs.map((e) => (
              <p className="txt body"> {e} </p>
            ))}
          </div>
          <img
            src={section.image}
            alt="example"
          />
        </section>
      ))}
      <Contacme />
    </>
    ) : (
      <NotFound/>
    )}
    
  </>);
};
export default ProjectDetails;
