import React from "react";
import "../assets/styles/components/cardProject.scss";


const BigCardProject = () => {
  return (
    <a href='/' className="bigCardProject">
      <h5 className="txt subtitle">Project Name</h5>
      <img
        className="cardProject__image"
        src="https://cdn.dribbble.com/users/3582616/screenshots/14512060/media/973c4ccd1c030405d42f41bb47b7bf2b.png?compress=1&resize=400x300"
        alt=""
      />
    </a>
  );
};
export default BigCardProject;
