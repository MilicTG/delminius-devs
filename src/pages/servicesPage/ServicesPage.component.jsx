import React from "react";
import { servicesObjectOne, servicesObjectTwo } from "./ServicesPage.data";
import { InfoSection } from "../../components";

const ServicesPage = () => {
  return (
    <>
      <InfoSection {...servicesObjectOne} />
      <InfoSection {...servicesObjectTwo} />
    </>
  );
};

export default ServicesPage;
