import React, { Suspense, lazy } from "react";
import Square from "./lazy/Square";
import Button from "./Button";
import "../assets/styles/container/projectsDetails.scss"
import { sectionProject } from "../helpers/projects";
const Imagen = lazy(() => import("./layout/images"));

type props = {
    section: sectionProject
}

const ProjectSection: React.FC<props> = ({section}) => {
    return (
        <section
            className="project-section"
            id={section.title}
        >
            <div>
                <h4 className="txt subtitle">{section.title}</h4>
                {section.image?.map((image) => (
                    <Suspense fallback={<Square />} key={image.alt}>
                        <Imagen src={image.src} alt={image.alt} key={image.alt} className="project-image" />
                    </Suspense>
                ))}
                {section.paragraphs.map((e) => (
                    <p className="txt body"> {e} </p>
                ))}
                {section.list && (
                    <div>
                        {section.list.title && (<h6 className="txt body_important">{section.list.title}</h6>)}
                        <ul className="element-list">
                            {section.list.elements.map(e => (<li className="txt body">{e}</li>))}
                        </ul>
                    </div>
                )}
                {section.learnMore && (
                    <Button
                        value="Learn more..."
                        externalURL
                        url={section.learnMore}
                    />
                )} 
            </div>
        </section>
    )
}
export default ProjectSection;