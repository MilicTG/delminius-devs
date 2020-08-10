import React from "react";
import styled from "styled-components";
import { colorFontPrimary, colorPrimary, container } from "../styles";
import { Android } from "@styled-icons/fa-brands/Android";
import { Pen } from "@styled-icons/boxicons-solid/Pen";
import { GearFill } from "@styled-icons/bootstrap/GearFill";

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
  flex-flow: row;
  padding-bottom: 5rem;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 3rem;
`;

const Icon = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
  color: ${colorPrimary};
  svg {
    padding: 0;
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  padding: 0.3rem 0;
  color: ${colorFontPrimary};
`;

const Desc = styled.p`
  font-size: 1.6rem;
  color: ${colorFontPrimary};
`;
