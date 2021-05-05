import React from "react";
import "../assets/styles/components/skills.scss";

import { skills } from "../helpers/home";

const Skills = () => {
  return (
    <section className="skills">
      {skills.map((e) => (
        <article key={e.value} className="skills__item">
          <img src={e.img} alt="cross platform" />
          <h5 className="txt subtitle">{e.value}</h5>
        </article>
      ))}
    </section>
  );
};
export default Skills;
