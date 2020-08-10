import React from "react";
import styled from "styled-components";
import { colorPrimary, container } from "../styles";
import imgPhone from "../assets/img-phone.png";
import { Button } from "../components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElements>
        <HeaderTextAndButtonWrapper>
          <HeaderTitle>{`Bring your App to next level`}</HeaderTitle>
          <HeaderDesc>
            DelminiusDevs is leading custom mobile app development company
            offering custom mobile app development on Android smartphones.
          </HeaderDesc>
          <Button>Contact Us</Button>
        </HeaderTextAndButtonWrapper>
        <HeaderPhoneImage src={imgPhone} />
      </HeaderElements>
    </HeaderWrapper>
  );
};

//styles
const HeaderWrapper = styled.header`
  width: 100%;
  height: 90vh;
  background: ${colorPrimary};
`;

const HeaderElements = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${container}
`;

const HeaderTextAndButtonWrapper = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
`;

const HeaderTitle = styled.h1`
  font-size: 6.7rem;
  margin: 0.5rem 0;
  color: #fff;
  height: fit-content;
  white-space: pre-line;
`;

const HeaderDesc = styled.h3`
  max-width: 70%;
  font-size: 2.4rem;
  font-weight: 400;
  margin: 0 0 7rem 0;
  color: #fff;
  height: fit-content;
  white-space: pre-line;
`;

const HeaderPhoneImage = styled.img`
  max-height: 70rem;
  padding-right: 7rem;
`;
