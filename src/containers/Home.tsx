import React from "react";
import Header from "../components/layout/Header";

import ShortButton from "../components/layout/ShortButton";
import Presentation from "../components/Presentation";

const Home = () => {
  return (
    <>
      <Header />
      <ShortButton />
      <Presentation />
      <p style={{position: 'relative', top: '100vh'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eaque
        dolorum minus doloribus mollitia eius repellendus sed. Dolorem earum
        laudantium laborum dolore, quam, unde corrupti, non voluptate cupiditate
        quos fugit.
      </p>
    </>
  );
};
export default Home;
