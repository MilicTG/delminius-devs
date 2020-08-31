import React from "react";
import styled from "styled-components";
import {
  colorSecondary,
  container,
  fontSize2x,
  fontSize3x,
  fontSize4x,
} from "../styles";
import { above } from "../util";

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
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  > h3 {
    font-size: ${fontSize2x};
    text-align: center;
    margin: 0.7rem auto;
    color: #fff;
  }
  ${above.med`
    padding-top: 4rem;
    padding-bottom: 4rem;
      > h3 {
        font-size: ${fontSize3x};
        margin: 1rem auto;
        }
  `}
  ${above.large`
    padding-top: 5rem;
    padding-bottom: 5rem;
      > h3 {
      font-size: ${fontSize4x};
      margin: 1rem auto;
      }
  `}
`;

const TitleSectionDecoration = styled.div`
  padding: 1rem, 0;
  width: 10vw;
  height: 0.7vh;
  background: ${colorSecondary};
  ${above.med`
    padding: 2rem, 0;
    width: 6vw;
    height: .7vh;`}
  ${above.large`
    padding: 3rem, 0;
    width: 5vw;
    height: 1vh;`}
`;
