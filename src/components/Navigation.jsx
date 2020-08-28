import React from "react";
import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react";
import { Logo } from "../components";
import { colorPrimary, container } from "../styles";
import { above } from "../util";

export const Navigation = () => {
  return (
    <NavWrapper>
      <NavElement>
        <Logo />
        <HamburgerWrapper>
          <Hamburger
            rounded
            duration={0.8}
            color="#fff"
            className="hamburger-menu"
          />
        </HamburgerWrapper>
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

const HamburgerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  ${above.large`
    display: none;
  `}
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  display: none;
  ${above.large`
    display: flex;
  `}
  > li {
    padding-left: 5rem;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
`;
