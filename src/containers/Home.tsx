import React from "react";
import ReactGA from 'react-ga' 

import "../assets/styles/container/home.scss";
import Projects from "../components/Projects";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";

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
      <div style={{ position: "relative", top: "100vh" }}>
        <Skills />
        <Projects/>
        <Contacme />
      </div>
    </>
  );
};
export default Home;
