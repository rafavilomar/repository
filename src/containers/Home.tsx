import React from "react";
import Button from "../components/Button";
import Header from "../components/layout/Header";

import { Mail } from "react-ionicons/lib";
import IconButton from "../components/IconButton";

const Home = () => {
  return (
    <>
      <Header />
      <IconButton icon={<Mail />} variant='primary'/>
    </>
  );
};
export default Home;
