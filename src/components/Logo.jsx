import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-light.svg";

export const Logo = () => {
  return <LogoSvg />;
};

const LogoSvg = styled.svg`
  background-image: url(${logo}), none;
  height: 60px;
  background-repeat: no-repeat;
  background-size: contain;
`;
