import React from "react";
import "../assets/styles/components/learning.scss";
import learning from "../assets/imgs/learning/redux.png";

const Learning = () => {
  return (
    <div className="learning">
      <h3 className="txt subtitle">Learning...</h3>
      <img src={learning} alt="learning" />
      <p className="txt body">
        Redux is an open-source Javascript library for managing aplication
        state. Similiar to Facebook's Flux architecture.
      </p>
    </div>
  );
};
export default Learning;
