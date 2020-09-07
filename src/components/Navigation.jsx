import React, { Component } from "react";
import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react";
import { Logo, SideDrawer } from "../components";
import { colorPrimary, container } from "../styles";
import { above } from "../util";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      bodyScrollLock: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
        bodyScrollLock: !prevState.bodyScrollLock,
      };
    });
    this.onScrollBodyLock();
  };

  onScrollBodyLock = () => {
    !this.state.bodyScrollLock
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  render() {
    return (
      <>
        <NavWrapper>
          <NavElement>
            <Logo />
            <HamburgerWrapper>
              <Hamburger
                rounded
                duration={0.8}
                color="#fff"
                className="hamburger-menu"
                onToggle={this.drawerToggleClickHandler}
              />
            </HamburgerWrapper>
            <NavLinks>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Contact</li>
            </NavLinks>
          </NavElement>
        </NavWrapper>
        <SideDrawer navBarState={this.state.sideDrawerOpen} />
      </>
    );
  }
}

export default Navigation;

//styles
const NavWrapper = styled.nav`
  height: 7rem;
  position: relative;
  z-index: 10;
  background: ${colorPrimary};
  display: flex;
  align-items: center;
  ${above.large`
    height: 9rem;  
  `}
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
