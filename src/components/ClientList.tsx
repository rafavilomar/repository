import React from "react";
import "../assets/styles/components/clientList.scss";
import { learning } from "../helpers/about";

const ClientList = () => {
  return (
    <div>
      <ul className="clientList">
        <h3 className="txt subtitle">History</h3>
        {learning.map((e) => (
          <li className="clientList__item">
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
