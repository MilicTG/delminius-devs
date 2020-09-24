import React from "react";
import { homeObjectOne, homeObjTwo, homeObjThree } from "./HomePage.data";
import { InfoSection, Titlebar, Services } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <Titlebar {...homeObjTwo} />
      <Services {...homeObjThree} />
    </>
  );
};

export default HomePage;
