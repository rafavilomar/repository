import React from "react";
import Button from "../components/Button";
import Header from "../components/layout/Header";

import { Mail } from "react-ionicons/lib";
import IconButton from "../components/IconButton";
import ShortButton from "../components/layout/ShortButton";

const Home = () => {
  return (
    <>
      <Header />
      <IconButton icon={<Mail />} variant='primary'/>
      <ShortButton/>
      <h1 className="txt mainTitle-primary">@rafavilomar </h1>
      <p className="txt body">I'm Rafael, a Web Developer and this is my personal corner on the Web City. Here you can find information about me, how contact me and explore my repositories.</p>
    </>
  );
};
export default Home;
