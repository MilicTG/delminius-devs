import React from "react";
import styled from "styled-components";
import { above } from "../util";
import { colorPrimary } from "../styles";

export const SideDrawer = (props) => {
  return (
    <SideDrawerWrapper className={props.navBarState ? "open" : "close"}>
      <NavLinks>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About Us</li>
        <li>Contact</li>
      </NavLinks>
    </SideDrawerWrapper>
  );
};

const SideDrawerWrapper = styled.div`
  height: 100%;
  max-height: 50rem;
  position: relative;
  width: 100%;
  z-index: 0;
  overflow: hidden;
  background-color: ${colorPrimary};
  position: absolute;
  z-index: 1;
  ${above.large`
    display: none;
  `}
  transition: transform 0.5s ease-out;
  &.open {
    transform: translateX(0);
  }
  &.close {
    transform: translateY(-120%);
    @media (min-width: 899px) {
      display: none;
    }
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 3rem 0 0 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  color: white;
  > li {
    padding: 3rem 0;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
`;
