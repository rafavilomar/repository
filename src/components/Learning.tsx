import React from "react";
import "../assets/styles/components/learning.scss";
import design from "../assets/imgs/learning/design.jpg";

const Learning = () => {
  return (
    <div className="learning">
      <h3 className="txt subtitle">Learning...</h3>
      <img src={design} alt="learning" />
      <p className="txt body">
        Design is the bridge between functionality and aesthetics, so it is the
        solution to a problem represented graphically.
      </p>
    </div>
  );
};
export default Learning;
