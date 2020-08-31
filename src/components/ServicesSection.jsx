import React from "react";
import styled from "styled-components";
import {
  colorFontPrimary,
  colorPrimary,
  container,
  fontSize1x,
  fontSize1s,
} from "../styles";
import { Android } from "@styled-icons/fa-brands/Android";
import { Pen } from "@styled-icons/boxicons-solid/Pen";
import { GearFill } from "@styled-icons/bootstrap/GearFill";
import { above } from "../util";

export const ServicesSection = (props) => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <Android />
        </Icon>
        <Title>Create custom Android app</Title>
        <Desc>
          In the modern world having just a website is not enough. We pride
          ourselves to deliver high quality android apps, based on modern and
          stable architecture.
        </Desc>
      </Wrapper>
      <Wrapper>
        <Icon>
          <Pen />
        </Icon>
        <Title>Modern UI/UX design</Title>
        <Desc>
          In the modern world having just a website is not enough. We pride
          ourselves to deliver high quality android apps, based on modern and
          stable architecture.
        </Desc>
      </Wrapper>
      <Wrapper>
        <Icon>
          <GearFill />
        </Icon>
        <Title>Launch and maintenance</Title>
        <Desc>
          In the modern world having just a website is not enough. We pride
          ourselves to deliver high quality android apps, based on modern and
          stable architecture.
        </Desc>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  display: flex;
  flex-flow: column;
  padding-bottom: 3rem;
  ${above.med`
     flex-flow: row;
     padding-bottom: 5rem;
  `}
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 2rem 3rem;
  ${above.med`
    padding: 0 3rem;
  `}
`;

const Icon = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 4rem;
  height: 4rem;
  color: ${colorPrimary};
  svg {
    padding: 0;
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: ${fontSize1x};
  font-weight: 600;
  margin: 0 auto;
  padding-top: 1rem;
  color: ${colorFontPrimary};
`;

const Desc = styled.p`
  font-size: ${fontSize1s};
  color: ${colorFontPrimary};
  text-align: center;
  ${above.med`
    text-align: start;
  `}
`;
