import React from "react";
import "../assets/styles/components/techStack.scss";
import IconTag from "./IconTag";
import { TechStackList } from "../helpers/about";

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h3 className="txt subtitle">Tech Stack</h3>
      <div>
        {TechStackList.map((tech, index) => <IconTag key={index} text={tech.text} icon={tech.icon} />)}
      </div>
    </div>
  );
};
export default TechStack;
