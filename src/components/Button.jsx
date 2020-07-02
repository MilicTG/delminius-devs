import React from "react";
import styled from "styled-components";
import { colorSecondary } from "../styles";

export const Button = (props) => {
  return <ButtonContainer>{props.children}</ButtonContainer>;
};

//styles
const ButtonContainer = styled.button`
  width: 18rem;
  height: 6rem;
  background: ${colorSecondary};
  border: none;
  color: #fff;
  border-radius: 5rem;
  font-size: 1.8rem;
  box-shadow: 9px 10px 29px -3px rgba(244, 81, 30, 1);
`;
