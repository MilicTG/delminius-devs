import React from "react";
import { Android } from "@styled-icons/fa-brands/Android";
import { Pen } from "@styled-icons/boxicons-solid/Pen";
import { GearFill } from "@styled-icons/bootstrap/GearFill";
import Pulse from "react-reveal/Pulse";

import {
  ServicesWrapper,
  ServicesContainer,
  TopLine,
  ServicesCardWrapper,
  CardContainer,
  CardIconHolder,
  CardTitle,
  CardText,
} from "./Services.elements.js";

const Services = ({
  cardTitleOne,
  cardTitleTwo,
  cardTitleThree,
  cardTextOne,
  cardTextTwo,
  cardTextThree,
}) => {
  return (
    <>
      <ServicesWrapper>
        <ServicesContainer>
          <TopLine>Our Services</TopLine>
          <ServicesCardWrapper>
            <Pulse bottom cascade>
              <CardContainer>
                <CardIconHolder>
                  <Android />
                </CardIconHolder>
                <CardTitle>{cardTitleOne}</CardTitle>
                <CardText>{cardTextOne}</CardText>
              </CardContainer>

              <CardContainer>
                <CardIconHolder>
                  <Pen />
                </CardIconHolder>
                <CardTitle>{cardTitleTwo}</CardTitle>
                <CardText>{cardTextTwo}</CardText>
              </CardContainer>

              <CardContainer>
                <CardIconHolder>
                  <GearFill />
                </CardIconHolder>
                <CardTitle>{cardTitleThree}</CardTitle>
                <CardText>{cardTextThree}</CardText>
              </CardContainer>
            </Pulse>
          </ServicesCardWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </>
  );
};

export default Services;
