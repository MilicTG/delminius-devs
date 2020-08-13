import React from "react";
import styled from "styled-components";
import { colorSecondary, container } from "../styles";

export const TitleSectionLight = (props) => {
  return (
    <TitleSectionContainer>
      <TitleSectionDecoration />
      <h3>{props.title}</h3>
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
  > h3 {
    font-size: 5rem;
    margin: 1rem 0;
    color: #ffffff;
  }
`;

const TitleSectionDecoration = styled.div`
  padding: 3rem, 0;
  width: 5vw;
  height: 1vh;
  background: ${colorSecondary};
`;