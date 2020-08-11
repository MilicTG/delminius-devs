import React from "react";
import styled from "styled-components";
import { colorFontPrimary, colorPrimary, container } from "../styles";

import { TitleSectionLight } from "./TitleSectionLight";

export const WhyMobile = () => {
  return (
    <Container>
      <TitleSectionLight title="Why Native" />
      <WhyWrapper></WhyWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  background-color: ${colorPrimary};
  padding-bottom: 5rem;
`;

const WhyWrapper = styled.div`
  ${container}
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
`;
