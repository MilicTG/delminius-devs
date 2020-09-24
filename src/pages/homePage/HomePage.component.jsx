import React from "react";
import {
  homeObjectOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
} from "./HomePage.data";
import {
  InfoSection,
  Titlebar,
  Services,
  Portfolio,
  Contact,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <Titlebar {...homeObjTwo} />
      <Services {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <Titlebar {...homeObjSix} />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
