import React from "react";
import styled from "styled-components";
import { colorFontPrimary, container } from "../styles";
import { above } from "../util";

import { TitleSection } from "../components";

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
  align-self: center;
  font-size: 3rem;
  font-weight: 700;
  ${above.large`
    align-items: start;
  `}
`;
