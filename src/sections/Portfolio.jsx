import React from "react";
import styled from "styled-components";
import { colorFontPrimary, container } from "../styles";

import { TitleSection } from "../sections";

export const Portfolio = () => {
  return (
    <Container>
      <TitleSection title="Our work" />
      <TempText>Coming soon</TempText>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  height: 60rem;
`;

const TempText = styled.h3`
  color: ${colorFontPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
`;
