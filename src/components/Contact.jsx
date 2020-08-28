import React from "react";
import styled from "styled-components";
import { colorPrimary, colorFontPrimary, container } from "../styles";
import imgPhone from "../assets/img-phone-four.png";

import { TitleSection } from "../components";

export const Contact = () => {
  return (
    <Container>
      <TitleSection title="Contact" />
      <ContactInfoWrapper>
        <ContactInfo>
          <ContactInfoTitle>Got a project in mind?</ContactInfoTitle>
          <ContactInfoDesc>
            Tell us more about you, your project and your business and we’ll let
            you know how we can help. We’re ready with a full suite of web
            design, web or mobile application development to get you where you
            need to be. All you have to do is to contact us.
          </ContactInfoDesc>
          <ContactInfoTitle>Contact Info:</ContactInfoTitle>
          <ContactInfoDesc>
            <p>
              <strong>Phone No:</strong> +0038763661215
            </p>
            <p>
              <strong>E-mail:</strong> deminiusdevs@gmail.com
            </p>
          </ContactInfoDesc>
        </ContactInfo>
        <ContactImage src={imgPhone} />
      </ContactInfoWrapper>
    </Container>
  );
};

const Container = styled.section`
  ${container}
  padding-bottom: 3rem;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;

const ContactInfo = styled.div`
  display: inherit;
  flex-flow: column;
  justify-content: space-evenly;
  width: 60%;
`;

const ContactInfoTitle = styled.h4`
  text-align: start;
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: ${colorPrimary};
`;

const ContactInfoDesc = styled.p`
  text-align: start;
  font-size: 1.8rem;
  margin-top: 0;
  color: ${colorFontPrimary};
  > p {
    margin: 0 0 1rem 0;
  }
`;

const ContactImage = styled.img`
  height: 45rem;
  padding-left: 4rem;
`;
