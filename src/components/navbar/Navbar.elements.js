import styled from "styled-components";
import {
  colorPrimary,
  container,
  fontSize2s,
  shadow,
  colorWhite,
  above,
  below,
} from "../../styles";
import { Link } from "react-router-dom";
import logoSVG from "../../assets/logo-light.svg";

export const NavbarWrapper = styled.nav`
  background: ${colorPrimary};
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize2s};
  position: sticky;
  z-index: 999;
  ${shadow}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  ${container}
`;

export const NavbarLogo = styled(Link)`
  color: ${colorWhite};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavbarIcon = styled.svg`
  background-image: url(${logoSVG}), none;
  height: 4rem;
  background-repeat: no-repeat;
  background-size: contain;
  ${above.large`
    height: 5rem;  
  `}
`;

export const NavbarHamburgerMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${above.large`
    display: none;
  `}
`;

export const NavbarNavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  ${above.med`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 8rem;
    left: ${({ click }) => (click ? 0 : "-100%")}
  `}
`;
