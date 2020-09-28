import React from "react";
import {
  homeObjectOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./HomePage.data";
import { InfoSection, Services, Portfolio, Contact } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} id="section-head" />
      <Services {...homeObjTwo} id="section-services" />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Portfolio id="section-portfolio" />
      <Contact id="section-contact" />
      <InfoSection {...homeObjFive} id="section-about-us" />
    </>
  );
};

export default HomePage;
