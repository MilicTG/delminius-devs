import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  fontSize2s,
  fontSize0,
  above,
  below,
} from "../../styles";
import { Link } from "react-router-dom";
import logoSVG from "../../assets/logo-light.svg";

export const FooterWrapper = styled.footer`
  padding: 10rem 0;
  background: ${colorPrimary};
`;

export const FooterContainer = styled.div`
  ${container};
  display: flex;
  justify-content: center;
`;

export const FooterCardContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: start;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "a b c d";
  ${below.med`
       grid-template-columns: 1fr 1fr 1fr;
       grid-template-rows: 1fr 1fr;
       grid-template-areas:
         "a a a"
         "b c d";
  `}
  ${below.small`
    grid-template-columns: 1fr;
  grid-template-rows: 4fr;
  grid-template-areas: "a" "b" "c" "d";
  `}
  & {
    .a {
      grid-area: a;
    }
    .b {
      grid-area: b;
    }
    .c {
      grid-area: c;
    }
    .d {
      grid-area: d;
    }
  }
`;

export const FooterCardItem = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const FooterItemLogo = styled.svg`
  background-image: url(${logoSVG}), none;
  height: 4rem;
  width: 10rem;
  background-repeat: no-repeat;
  background-size: contain;
  ${above.big`
    height: 5rem;  
  `}
`;

export const FooterItemLogoDesc = styled.p`
  font-size: ${fontSize0};
  color: ${colorWhite};
  margin: 1rem 2rem 1rem 0;
  padding-top: 2rem;
`;

export const FooterSitemapTitle = styled.h5`
  font-size: ${fontSize2s};
  color: ${colorSecondary};
  margin: 1.5rem 0;
`;

export const FooterSitemapItem = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterSitemapNavWrapper = styled.li`
  padding: 0.5rem 0;
`;

export const FooterNavigationLink = styled(Link)`
  color: ${colorWhite};
  display: flex;
  text-decoration: none;
  padding: 0.5rem 0;
  height: 100%;
  font-size: ${fontSize0};
  &:hover {
    color: ${colorSecondary};
    transition: all 0.3s ease;
  }
  ${below.med`
    width: 100%;
    display: table;
  `};
`;
