import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  NavbarHamburgerMenuWrapper,
} from "./Navbar.elements";
import { Sling as NavbarHamburgerMenu } from "hamburger-react";

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
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
