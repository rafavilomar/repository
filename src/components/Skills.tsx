import React from "react";
import '../assets/styles/components/skills.scss'

import cross_platform from '../assets/imgs/skills/multi-plataform.svg';

const Skills = () => {
  return (
    <section className="skills">
      <article className="skills__item">
          <img src={cross_platform} alt="cross platform image"/>
          <h5 className="txt subtitle">Cross-Platform </h5>
      </article>
      <article className="skills__item">
          <img src={cross_platform} alt="cross platform image"/>
          <h5 className="txt subtitle">Cross-Platform </h5>
      </article>
      <article className="skills__item">
          <img src={cross_platform} alt="cross platform image"/>
          <h5 className="txt subtitle">Cross-Platform </h5>
      </article>
    </section>
  );
};
export default Skills;
