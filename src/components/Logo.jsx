import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-light.svg";
import { above } from "../util";

export const Logo = () => {
  return <LogoSvg />;
};

const LogoSvg = styled.svg`
  background-image: url(${logo}), none;
  height: 4rem;
  background-repeat: no-repeat;
  background-size: contain;
  ${above.large`
  height: 6rem;  
  `}
`;
