import React from "react";
import "../assets/styles/components/clientList.scss";
import { Experiences } from "../helpers/about";

const ClientList = () => {
  return (
    <div>
      <ul className="clientList">
        <h3 className="txt subtitle">History</h3>
        {Experiences.map((e, index) => (
          <li className="clientList__item" key={index}>
            <div>
              <h6 className="txt subtitle">{e.client}</h6>
              <p className="txt body">{e.title}</p>
            </div>
            <p className="txt subtitle">{e.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ClientList;
