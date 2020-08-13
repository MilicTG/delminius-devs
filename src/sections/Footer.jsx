import React from "react";
import styled from "styled-components";
import { colorPrimary, colorFontPrimary, container } from "../styles";
import logo from "../assets/logo-light.svg";

export const Footer = () => {
  return (
    <Container>
      <Logo />
      <NavLinks>
        <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Blog</li>
        <li>Contact</li>
      </NavLinks>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  background-color: ${colorPrimary};
  display: flex;
  flex-flow: row;
`;

const Logo = styled.svg`
  background-image: url(${logo}), none;
  width: 25rem;
  margin: 3rem 0;
  background-repeat: no-repeat;
  background-size: contain;
`;

const NavLinks = styled.ul`
  list-style: column;
  margin: 0;
  padding: 3rem 0;
  display: flex;
  flex-flow: column;
  border-radius: 4px;
  overflow: hidden;
  > li {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
`;
