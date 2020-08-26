import React from "react";
import styled from "styled-components";
import { colorPrimary, colorFontPrimary, container } from "../styles";
import logo from "../assets/logo-light.svg";

export const Footer = () => {
  return (
    <Container>
      <Logo />
      <NavLinks>
        <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Blog</li>
        <li>Contact</li>
      </NavLinks>
      <FooterContact>
        <ContactInfoDesc>
          <strong>Contact</strong>
          <p>
            <strong>Phone No:</strong> +0038763661215
          </p>
          <p>
            <strong>E-mail:</strong> deminiusdevs@gmail.com
          </p>
        </ContactInfoDesc>
      </FooterContact>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  background-color: ${colorPrimary};
  display: flex;
  justify-content: space-evenly;
  flex-flow: row;
`;

const Logo = styled.svg`
  background-image: url(${logo}), none;
  width: 25rem;
  margin: 3rem 0;
  background-repeat: no-repeat;
  background-size: contain;
`;

const NavLinks = styled.ul`
  list-style: column;
  padding: 3rem 0;
  display: flex;
  flex-flow: column;
  border-radius: 4px;
  overflow: hidden;
  > li {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
  }
`;

const FooterContact = styled.div`
  display: inherit;
  flex-direction: column;
  padding: 3rem 0;
`;

const ContactInfoDesc = styled.p`
  text-align: start;
  font-size: 1.8rem;
  margin-top: 0;
  color: white;

  margin: 0 0 1rem 0;
`;
