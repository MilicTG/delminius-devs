import React from "react";
import styled from "styled-components";
import { colorPrimary, colorFontPrimary, container } from "../styles";
import imgHomer from "../assets/homer.png";
import imgSpongebob from "../assets/spongbob.png";
import imgMorty from "../assets/morty.png";
import imgPhone from "../assets/img-phone-three.png";
import { above } from "../util";

import { TitleSectionLight } from "../components";

export const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <TitleSectionLight title="About Us" />
        <AboutUsContentWrapper>
          <AboutUsText>
            <p>
              We are a team of professionals based in Europe. We've been living
              and breathing mobile since 2015.
            </p>
            <p>
              We pride ourselves on our excellent customer service. You will not
              walk the path to mobile success alone. We are here for you,
              guiding you along the way and offering our vast expertise starting
              from sketching an idea with pen and paper to implementing the best
              solution and celebrating success with you.
            </p>
            <p>
              In short, we are the kind of team who likes to focus on results,
              such as best user experience, engagement, user satisfaction,
              retention, and scalability.
            </p>
          </AboutUsText>
          <AboutUsImg src={imgPhone} />
        </AboutUsContentWrapper>
        <TeamTitle>Meet the team</TeamTitle>
        <HeadImageWrapper>
          <HeadInfoWrapper>
            <HeadImage src={imgHomer} />
            <HeadTitle>Josip Krajinovic</HeadTitle>
            <HeadDesc>Senior Android developer, master of fragments</HeadDesc>
          </HeadInfoWrapper>
          <HeadInfoWrapper>
            <HeadImage src={imgSpongebob} />
            <HeadTitle>Ivan Milic </HeadTitle>
            <HeadDesc>
              Junior Android developer, knows how to turn on a phone
            </HeadDesc>
          </HeadInfoWrapper>
          <HeadInfoWrapper>
            <HeadImage src={imgMorty} />
            <HeadTitle>Damir Mihojevic</HeadTitle>
            <HeadDesc>Lead Designer, with large font library</HeadDesc>
          </HeadInfoWrapper>
        </HeadImageWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  background-color: ${colorPrimary};
  padding-bottom: 3rem;
`;

const Wrapper = styled.div`
  ${container}
`;

const AboutUsContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  ${above.med`
    flex-flow: row;
  `}
`;

const AboutUsText = styled.p`
  color: white;
  font-size: 2rem;
  text-align: start;
`;

const AboutUsImg = styled.img`
  height: 10rem;
  ${above.med`
    height: 20rem;
    padding-left: 4rem;  
  `}
`;

const TeamTitle = styled.h4`
  padding-top: 3rem;
  font-size: 3rem;
  text-align: center;
  color: white;
`;

const HeadImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  ${above.med`
    flex-flow: row;
  `}
`;

const HeadInfoWrapper = styled.div`
  width: 100%;
  display: inherit;
  flex-flow: column;
  justify-content: space-evenly;
  padding-bottom: 3rem;
  ${above.med`
    width: 20%;  `};
`;

const HeadImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
`;

const HeadTitle = styled.h5`
  font-size: 2.2rem;
  text-align: center;
  color: white;
  margin: 0.7rem auto;
  ${above.med`
    flex-flow: row;
  `}
`;

const HeadDesc = styled.p`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  margin: 0.7rem auto;
`;
