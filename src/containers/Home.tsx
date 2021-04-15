import React from "react";
import ReactGA from 'react-ga' 

import "../assets/styles/container/home.scss";
import BigCardProject from "../components/BigCardProject";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview('/');
    document.title = "Home | Rafael Vilomar";
  }, []);
  return (
    <>
      <Header />
      <ShortButton />
      <Presentation />
      <div style={{ position: "relative", top: "100vh" }}>
        <Skills />
        <BigCardProject/>
        <Contacme />
      </div>
    </>
  );
};
export default Home;
