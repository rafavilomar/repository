import React from "react";

import '../assets/styles/components/presentation.scss'
import Button from "./Button";

import {
    CodeWorking
} from 'react-ionicons'

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation__nickname">
        <h1 className="txt mainTitle-primary">@rafavilomar</h1>
      </div>
      <div className="presentation__details">
        <p className="txt body">
          I'm Rafael, a Web Developer and this is my personal corner on the Web
          City. Here you can find information about me, how contact me and
          explore my repositories.
        </p>
        <div>
            <Button value="369labs" icon={<CodeWorking/>} variant='secondary'/>
            <Button value="369labs" icon={<CodeWorking/>} variant='secondary'/>
            <Button value="369labs" icon={<CodeWorking/>} variant='secondary'/>
        </div>
      </div>
      <div className="presentation__action">
          <Button value="Projects" />
      </div>
    </section>
  );
};
export default Presentation;
