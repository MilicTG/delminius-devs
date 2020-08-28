import React from "react";
import styled from "styled-components";
import { colorPrimary, container } from "../styles";
import imgPhone from "../assets/img-phone-two.png";

import { TitleSectionLight } from "../components";

export const WhyMobile = () => {
  return (
    <Container>
      <TitleSectionLight title="Why is an App better than a Website?" />
      <WhyWrapper>
        <WhyText>
          <p>
            Reasons Why Mobile Apps Are Better Than Mobile Websites. Our team of
            custom mobile app development service experts are experienced in a
            variety of languages and environments so we can deliver your new
            mobile app that boosts your business. Ensure that your web copy is
            fresh, relevant and up to date with your industry’s standards.{" "}
          </p>

          <p>
            Whether you need an entire site re-write or just strategically
            placed SEO keywords to bolster your search engine ranking. Connect
            with your customers through a screen, whether the app is open or
            not.
          </p>

          <p>
            Send push notifications straight to their phone to garner more time
            on your mobile app and entice your customers to use your services.
          </p>
        </WhyText>
        <WhyImage src={imgPhone} />
      </WhyWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  background-color: ${colorPrimary};
  padding-bottom: 5rem;
`;

const WhyWrapper = styled.div`
  ${container}
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
`;

const WhyText = styled.p`
  color: #fff;
  font-size: 2rem;
`;

const WhyImage = styled.img`
  height: 40rem;
  padding-left: 4rem;
`;
