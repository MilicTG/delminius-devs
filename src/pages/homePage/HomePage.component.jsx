import React from "react";
import { homeObjectOne } from "./HomePage.data";
import { InfoSection } from "../../components";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
    </>
  );
};

export default HomePage;
