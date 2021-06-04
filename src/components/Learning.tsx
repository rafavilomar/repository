import React from "react";
import "../assets/styles/components/learning.scss";
import learning from "../assets/imgs/learning/webpack.jpg";

const Learning = () => {
  return (
    <div className="learning">
      <h3 className="txt subtitle">Learning...</h3>
      <img src={learning} alt="learning" />
      <p className="txt body">
        Webpack is an open-source Javascript module bundler for prepare our code to production. 
      </p>
    </div>
  );
};
export default Learning;
