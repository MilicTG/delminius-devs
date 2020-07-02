import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-light.svg";
import { colorPrimary, container } from "../styles";

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavElement>
        <Logo />
        <NavLinks>
          <li>Home</li>
          <li>About Us</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact</li>
        </NavLinks>
      </NavElement>
    </NavWrapper>
  );
};

//styles
const NavWrapper = styled.nav`
  height: 9rem;
  background: ${colorPrimary};
  display: flex;
  align-items: center;
`;

const NavElement = styled.div`
  height: 100%;
  display: flex;
  ${container}
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.svg`
  background-image: url(${logo}), none;
  height: 60px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  > li {
    padding-left: 5rem;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
`;
