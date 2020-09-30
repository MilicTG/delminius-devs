import React from "react";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour,
} from "./HomePage.data";
import { InfoSection, Services, TheTeam, Contact } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <Services {...homeObjectFour} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <TheTeam />
      <Contact />
    </>
  );
};

export default HomePage;
