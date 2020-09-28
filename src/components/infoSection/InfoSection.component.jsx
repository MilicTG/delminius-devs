import React from "react";
import { Button } from "../../components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {
  InfoSectionWrapper,
  InfoSectionContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonLink,
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
  buttonVisible,
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
                <Fade
                  left={imgStart ? false : true}
                  right={imgStart ? true : false}
                  cascade
                >
                  <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </Subtitle>
                  <ButtonLink to="/" buttonVisible={buttonVisible}>
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </ButtonLink>
                </Fade>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <Zoom>
                <ImageWrapper start={start}>
                  <Image src={src} alt={alt} />
                </ImageWrapper>
              </Zoom>
            </InfoColumn>
          </InfoRow>
        </InfoSectionContainer>
      </InfoSectionWrapper>
    </>
  );
};

export default InfoSection;
