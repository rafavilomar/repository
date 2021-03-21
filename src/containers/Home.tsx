import React from "react";
import '../assets/styles/container/home.scss'
import Carousel from "../components/Carousel";
import Contacme from "../components/layout/Contacme";

import Header from "../components/layout/Header";
import ShortButton from "../components/layout/ShortButton";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <ShortButton />
      <Presentation />
      <div style={{position: 'relative', top: '100vh'}}>
        <Skills/>
        <Carousel/>
        <Contacme/>
      </div>
    </>
  );
};
export default Home;
