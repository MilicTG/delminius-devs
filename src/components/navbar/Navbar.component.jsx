import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  NavbarHamburgerMenuWrapper,
  NavbarNavigationMenu,
  NavbarNavigationItem,
  NavbarNavigationLink,
} from "./Navbar.elements";
import smoothscroll from "smoothscroll-polyfill";
import { Sling as NavbarHamburgerMenu } from "hamburger-react";

// kick off the polyfill!
smoothscroll.polyfill();

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavbarLogo to="/">
            <NavbarIcon />
          </NavbarLogo>
          <NavbarHamburgerMenuWrapper>
            <NavbarHamburgerMenu
              rounded
              duration={0.8}
              color="#fff"
              onToggle={handleClick}
            />
          </NavbarHamburgerMenuWrapper>
          <NavbarNavigationMenu onClick={handleClick} click={click}>
            <NavbarNavigationItem>
              <NavbarNavigationLink to="/">Home</NavbarNavigationLink>
            </NavbarNavigationItem>
            <NavbarNavigationItem>
              <NavbarNavigationLink to="/">Services</NavbarNavigationLink>
            </NavbarNavigationItem>
            <NavbarNavigationItem>
              <NavbarNavigationLink to="/">Portfolio</NavbarNavigationLink>
            </NavbarNavigationItem>
            <NavbarNavigationItem>
              <NavbarNavigationLink to="/">Contact</NavbarNavigationLink>
            </NavbarNavigationItem>
          </NavbarNavigationMenu>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
