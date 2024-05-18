import React from "react";

import '../../assets/styles/components/layout/header.scss'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <ul className="header-list">
          <li className="header-list__item">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="header-list__item">
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
