import React from "react";
import { Android } from "@styled-icons/fa-brands/Android";
import { Pen } from "@styled-icons/boxicons-solid/Pen";
import { GearFill } from "@styled-icons/bootstrap/GearFill";
import Fade from "react-reveal/Fade";

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
          <Fade left>
            <TopLine>Our Services</TopLine>
          </Fade>
          <ServicesCardWrapper>
            <Fade bottom cascade>
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
            </Fade>
          </ServicesCardWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </>
  );
};

export default Services;
