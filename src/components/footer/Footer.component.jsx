import React from "react";
import Fade from "react-reveal/Fade";
import {
  FooterWrapper,
  FooterContainer,
  FooterCardContainer,
  FooterCardItem,
  FooterItemLogo,
  FooterItemLogoDesc,
  FooterSitemapTitle,
  FooterSitemapItem,
  FooterSitemapNavWrapper,
  FooterNavigationLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCardContainer>
          <Fade left>
            <FooterCardItem className="a">
              <FooterItemLogo />
              <FooterItemLogoDesc>
                In short, we are the kind of team who likes to focus on results,
                such as best user experience, engagement, user satisfaction,
                retention, and scalability.
              </FooterItemLogoDesc>
            </FooterCardItem>
          </Fade>

          <Fade bottom cascade>
            <FooterCardItem className="b">
              <FooterSitemapTitle>Quick links</FooterSitemapTitle>
              <FooterSitemapItem>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Home</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Services</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Portfolio</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Contact</FooterNavigationLink>
                </FooterSitemapNavWrapper>
              </FooterSitemapItem>
            </FooterCardItem>

            <FooterCardItem className="c">
              <FooterSitemapTitle>Technologies</FooterSitemapTitle>
              <FooterSitemapItem>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Android OS</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Wear OS</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Kotlin</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">
                    Android Studio
                  </FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Java</FooterNavigationLink>
                </FooterSitemapNavWrapper>
              </FooterSitemapItem>
            </FooterCardItem>

            <FooterCardItem className="d">
              <FooterSitemapTitle>Social</FooterSitemapTitle>
              <FooterSitemapItem>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">LinkedIn</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Facebook</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">Instagram</FooterNavigationLink>
                </FooterSitemapNavWrapper>
                <FooterSitemapNavWrapper>
                  <FooterNavigationLink to="/">GitHub</FooterNavigationLink>
                </FooterSitemapNavWrapper>
              </FooterSitemapItem>
            </FooterCardItem>
          </Fade>
        </FooterCardContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
