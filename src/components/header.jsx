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
          <HeaderTitle>{`Modern App development`}</HeaderTitle>
          <HeaderDesc>Bring your Android App to next level</HeaderDesc>
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
  font-size: 2.4rem;
  font-weight: 400;
  margin: 0 0 7rem 0;
  color: #fff;
  height: fit-content;
  white-space: pre-line;
`;

const HeaderPhoneImage = styled.img`
  max-height: 55rem;
  padding-right: 7rem;
`;
