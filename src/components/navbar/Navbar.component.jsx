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
            <NavbarNavigationItemButton>
              {button ? (
                <NavigationButtonLink to="/">
                  <Button secondary>Contact Us</Button>
                </NavigationButtonLink>
              ) : (
                <NavigationButtonLink to="/">
                  <Button onClick={closeMobileMenu} fontBig secondary>
                    Contact Us
                  </Button>
                </NavigationButtonLink>
              )}
            </NavbarNavigationItemButton>
          </NavbarNavigationMenu>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;