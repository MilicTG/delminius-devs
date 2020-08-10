import React from "react";
import styled from "styled-components";
import { colorPrimary } from "../styles";

export const ServicesCard = (props) => {
  return (
    <CardContainer>
      <CardIcon src={props.icon} />
    </CardContainer>
  );
};

const CardContainer = styled.div``;

const CardIcon = styled.svg`
  width: auto;
  height: 4rem;
  color: ${colorPrimary};
`;
