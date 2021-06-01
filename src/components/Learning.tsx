import React from "react";
import "../assets/styles/components/learning.scss";
import learning from "../assets/imgs/learning/npm.jpg";

const Learning = () => {
  return (
    <div className="learning">
      <h3 className="txt subtitle">Learning...</h3>
      <img src={learning} alt="learning" />
      <p className="txt body">
        Node Package Manager (npm) is a package manager for the javascript runtime enviroment Node.js
      </p>
    </div>
  );
};
export default Learning;
