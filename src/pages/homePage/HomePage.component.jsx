import React from "react";
import {
  homeObjectOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
  homeObjEight,
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
      <Titlebar {...homeObjSeven} />
      <Contact />
      <InfoSection {...homeObjEight} />
    </>
  );
};

export default HomePage;
