import React from "react";
import { homeObjectOne } from "./HomePage.data";
import { InfoSection, Services } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <Services />
    </>
  );
};

export default HomePage;
