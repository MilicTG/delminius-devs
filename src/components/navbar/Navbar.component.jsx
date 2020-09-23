import React, { useState, useEffect } from "react";
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  NavbarHamburgerMenuWrapper,
  NavbarNavigationMenu,
  NavbarNavigationItem,
  NavbarNavigationLink,
  NavbarNavigationItemButton,
  NavigationButtonLink,
} from "./Navbar.elements";
import { Sling as NavbarHamburgerMenu } from "hamburger-react";
import Button from "../button/Button.component";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {};

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
              <NavbarNavigationLink to="/">About Us</NavbarNavigationLink>
            </NavbarNavigationItem>
          </NavbarNavigationMenu>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
