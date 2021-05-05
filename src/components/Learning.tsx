import React from "react";
import "../assets/styles/components/learning.scss";
import learning from "../assets/imgs/learning/ecmascript6.jpg";

const Learning = () => {
  return (
    <div className="learning">
      <h3 className="txt subtitle">Learning...</h3>
      <img src={learning} alt="learning" />
      <p className="txt body">
        ECMAScript is a JavaScript standard meant to ensure the interoperability
        of web pages across different web browsers.
      </p>
    </div>
  );
};
export default Learning;
