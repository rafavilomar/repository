import React, { ReactNode } from "react";
import { LogoDribbble, LogoGithub } from "react-ionicons";
import "../assets/styles/container/projectsDetails.scss";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import ProjectPresentation from "../components/ProjectPresentation";
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

  // const style = require('sass-extract-loader!./../assets/styles/container/projectsDetails.scss');
  // const colValue = style.global['$theme-colors'].value.col.value.hex; // '#00695F';
  const [value, setValue] = React.useState<number>()
  const setColums = (num: number = 1) => {
    setValue(num)
    document.getElementById("test")?.style.setProperty('--col', `${value}` )
  }
  const setColumsXL = (num2: number) => {
    document.getElementById("test")?.style.setProperty('--colxl', `${num2}` )
  }
  
  // const cambiarFondoNieto = () => {
  //   let fondoPadre = getComputedStyle(document.getElementById("padre")).getPropertyValue('--color-fondo');
  //   document.getElementById("nieto").style.setProperty('--color-fondo', fondoPadre);
  // }

  const get:ReactNode = (value: number, arr: any[]) => {
    setColums(value)
    return (
      arr.map((image) => (
         <img
          src={image}
          alt="example"
        />
        
        ))
    )
    
    
}

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
            {projectDetails?.behance && <IconButton variant="secondary" externalURL url={projectDetails?.behance} icon={<LogoDribbble />} />}
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
          <section id='test' 
          //style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, height: 500}}
          >
          </section>
          {section.image.map((image) => (
            <img
            src={image}
            alt="example"
          />
          ))}
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
