import React from "react";
import ReactGA from 'react-ga'

import "../assets/styles/container/home.scss";
import Projects from "../components/Projects";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";

const Home = () => {

  React.useEffect(() => {
    ReactGA.pageview('/');
    window.scrollTo(0, 0);
    document.title = "Home | Rafael Vilomar";
  }, []);

  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Contacme />
    </>
  );
};
export default Home;
