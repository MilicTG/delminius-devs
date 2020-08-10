import React from "react";
import styled from "styled-components";
import { colorSecondary } from "../styles";

export const Button = (props) => {
  return (
    <ButtonHolder>
      <ButtonContainer>{props.children}</ButtonContainer>
    </ButtonHolder>
  );
};

//styles
const ButtonHolder = styled.div`
  transition: all 5s ease;
`;

const ButtonContainer = styled.button`
  width: 18rem;
  height: 6rem;
  background: ${colorSecondary};
  border: none;
  color: #fff;
  border-radius: 5rem;
  font-size: 1.8rem;
  box-shadow: 3px 5px 20px -3px rgba(244, 81, 30, 1);
  :hover {
    background: #ff7f57;
    transform: scale(1.01);
  }
`;
