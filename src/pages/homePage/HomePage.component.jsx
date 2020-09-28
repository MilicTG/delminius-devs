import React from "react";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjFour,
  homeObjFive,
} from "./HomePage.data";
import { InfoSection, Portfolio, Contact } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <Contact/>
    </>
  );
};

export default HomePage;
