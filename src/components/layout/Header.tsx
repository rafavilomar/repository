import React from "react";

import '../../assets/styles/components/layout/header.scss'

import { Link } from "react-router-dom";

const Header = () => {

  const [currentPage, setCurrentPage] = React.useState<string>("")
  React.useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  return (
    <header>
      <nav className="header">
        <ul className="header-list">
        <li className={`header-list__item ${(currentPage === "/") && "header-list__item__active"}`}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className={`header-list__item ${(currentPage === "/about") && "header-list__item__active"}`}>
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
