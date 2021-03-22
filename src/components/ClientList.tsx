import React from "react";
import "../assets/styles/components/clientList.scss";

const ClientList = () => {
  return (
    <div>
      <ul className="clientList">
        <h3 className="txt subtitle">Client List</h3>
        {[1, 1].map((e) => (
          <li className="clientList__item">
            <div>
              <h6 className="txt subtitle">Name Client</h6>
              <p className="txt body">Title job</p>
            </div>
            <p className="txt subtitle">##-##</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ClientList;
