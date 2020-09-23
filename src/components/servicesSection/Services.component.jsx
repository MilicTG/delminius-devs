import React from "react";

import {
  ServicesWrapper,
  ServicesContainer,
  ServicesHeading,
  ServicesCardWrapper,
} from "./Services.elements.js";

const Services = () => {
  return (
    <>
      <ServicesWrapper>
        <ServicesContainer>
          <ServicesHeading>Our Services</ServicesHeading>
          <ServicesCardWrapper></ServicesCardWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </>
  );
};

export default Services;
