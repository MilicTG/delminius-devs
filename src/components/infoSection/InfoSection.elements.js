import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  colorPrimary,
  colorSecondary,
  colorFontPrimary,
  colorWhite,
  container,
  fontSize4x,
  fontSize0,
  above,
  below,
} from "../../styles";

export const InfoSectionWrapper = styled.div`
  color: ${colorWhite};
  padding: 10rem 0;
  background: ${({ lightBg }) => (lightBg ? colorWhite : colorPrimary)};
  ${above.large`
    padding: 15rem 0;
`}
`;

export const InfoSectionContainer = styled.div`
  ${container}
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -1.5rem -1.5rem -1.5rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  ${below.med`
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  `}
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-top: 0;
  padding-bottom: 6rem;
  ${below.med`
    padding-bottom: 6.5rem;
  `}
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? colorSecondary : colorFontPrimary};
  font-size: ${fontSize0};
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: ${fontSize4x};
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? colorWhite : colorFontPrimary)};
`;

export const Subtitle = styled.p`
  max-width: 44rem;
  margin-bottom: 3.5rem;
  font-size: ${fontSize0};
  line-height: 2.4rem;
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? colorWhite : colorFontPrimary};
`;

export const ButtonLink = styled(Link)`
  display: ${({ buttonVisible }) => (buttonVisible ? "block" : "none")};
`;

export const ImageWrapper = styled.div`
  max-width: 55.5rem;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  background-position: center center;
  background-repeat: no-repeat;
  ${below.small`
    width: 90%;
  `}
`;

export const Image = styled.img`
  padding-right: 0;
  border: 0;
  display: block;
  width: 90%;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
`;
