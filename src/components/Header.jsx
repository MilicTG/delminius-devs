import React from "react";
import styled from "styled-components";
import {
  colorPrimary,
  container,
  fontSize5x,
  fontSize4x,
  fontSize3x,
} from "../styles";
import imgPhone from "../assets/img-phone.png";
import { Button } from ".";
import { above } from "../util";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElements>
        <HeaderTextAndButtonWrapper>
          <HeaderTitle>{`Bring your App to next level`}</HeaderTitle>
          <HeaderDesc>
            <p>
              DelminiusDevs is leading custom mobile app development company
              offering custom mobile app development on Android smartphones.
            </p>
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
  max-height: 1080px;
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
  align-items: center;
  flex-flow: column;
  ${above.large`
    align-items: start;
  `}
`;

const HeaderTitle = styled.h1`
  font-size: ${fontSize3x};
  text-align: center;
  margin: 0.5rem 0;
  color: #fff;
  height: fit-content;
  white-space: pre-line;
  ${above.med`
    font-size: ${fontSize4x};
    text-align: start;
  `}
  ${above.large`
    font-size: ${fontSize5x};
    text-align: start;
  `}
`;

const HeaderDesc = styled.h3`
  max-width: 70%;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 400;
  margin: 0 0 7rem 0;
  color: #fff;
  height: fit-content;
  white-space: pre-line;
  ${above.large`
    font-size: 2.4rem;    
    text-align: start;
  `}
`;

const HeaderPhoneImage = styled.img`
  max-height: 80%;
  padding: 1rem 5rem 1rem 7rem;
  display: none;
  ${above.large`
    display: block;
  `}
`;
