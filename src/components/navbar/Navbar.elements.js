import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  blackShadow,
  fontSize2s,
  fontSize0,
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
  top: 0;
  z-index: 999;
  ${blackShadow}
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
  width: 10rem;
  background-repeat: no-repeat;
  background-size: contain;
  ${above.big`
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
  margin: 0;
  padding: 0;
  ${below.med`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 8rem;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colorPrimary}
  `}
`;

export const NavbarNavigationItem = styled.li`
  height: 8rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${colorSecondary};
  }
  ${below.med`
    width: 100%;
    &:hover{
      border: none;
    }
`}
`;

export const NavbarNavigationLink = styled(Link)`
  color: ${colorWhite};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: ${fontSize0};
  &:hover {
    color: ${colorSecondary};
    transition: all 0.3s ease;
  }
  ${below.med`
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  `};
`;

export const NavbarNavigationItemButton = styled.li`
  ${below.med`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
`}
`;

export const NavigationButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
