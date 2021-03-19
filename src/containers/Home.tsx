import React from "react";
import Button from "../components/Button";
import Header from "../components/layout/Header";

import { Mail } from "react-ionicons/lib";

const Home = () => {
  return (
    <>
      <Header />
      <Button icon={<Mail />} value="Projects" />
    </>
  );
};
export default Home;
