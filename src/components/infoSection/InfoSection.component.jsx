import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import {
  InfoSectionWrapper,
  InfoSectionContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImageWrapper,
  Image,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  start,
  src,
  alt,
}) => {
  return (
    <>
      <InfoSectionWrapper lightBg={lightBg}>
        <InfoSectionContainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImageWrapper start={start}>
                <Image src={src} alt={alt} />
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </InfoSectionContainer>
      </InfoSectionWrapper>
    </>
  );
};

export default InfoSection;
