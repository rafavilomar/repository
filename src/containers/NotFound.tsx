import React from "react";
import "../assets/styles/container/notFound.scss";

import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="root-not-found">
      <h3 className="txt _404"> 404 </h3>
      <h5 className="txt subtitle">Oops! We are too far</h5>
      <p className="txt body">
        We can't find the page that you're looking for.
      </p>
      <Button value="Back to Home" />
    </div>
  );
};
export default NotFound;
