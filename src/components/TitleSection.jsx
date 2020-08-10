import React from "react";
import styled from "styled-components";
import { colorSecondary, container } from "../styles";

export const TitleSection = (props) => {
  return (
    <TitleSectionContainer>
      <TitleSectionDecoration />
      <TitleSectionText>{props.title}</TitleSectionText>
    </TitleSectionContainer>
  );
};

const TitleSectionContainer = styled.div`
  ${container}
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const TitleSectionDecoration = styled.div`
  padding: 3rem, 0;
  width: 5vw;
  height: 1vh;
  background: ${colorSecondary};
`;

const TitleSectionText = styled.h3`
  font-size: 5rem;
  margin: 1rem 0;
  color: #595959;
`;
