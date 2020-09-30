import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {
  TheTeamWrapper,
  TheTeamContainer,
  TheTeamHeadline,
  TheTeamCardContainer,
  TheTeamCard,
  TheTeamHead,
  TheTeamTitle,
  TheTeamDesc,
} from "./TheTeam.elements.js";

import imgOne from "../../assets/homer.png";
import imgTwo from "../../assets/spongbob.png";
import imgThree from "../../assets/rick.png";

const TheTeam = () => {
  return (
    <TheTeamWrapper>
      <TheTeamContainer>
        <Fade left>
          <TheTeamHeadline>Our Team</TheTeamHeadline>
        </Fade>
        <TheTeamCardContainer>
          <Zoom bottom cascade>
            <TheTeamCard>
              <TheTeamHead src={imgOne} alt="Josip" />
              <TheTeamTitle>Josip Krajinovic</TheTeamTitle>
              <TheTeamDesc>Senior Android developer</TheTeamDesc>
            </TheTeamCard>

            <TheTeamCard>
              <TheTeamHead src={imgTwo} alt="Ivan" />
              <TheTeamTitle>Ivan Milic</TheTeamTitle>
              <TheTeamDesc>Junior Android developer</TheTeamDesc>
            </TheTeamCard>

            <TheTeamCard>
              <TheTeamHead src={imgThree} alt="Josip" />
              <TheTeamTitle>Damir Mihojevic</TheTeamTitle>
              <TheTeamDesc>Lead designer</TheTeamDesc>
            </TheTeamCard>
          </Zoom>
        </TheTeamCardContainer>
      </TheTeamContainer>
    </TheTeamWrapper>
  );
};

export default TheTeam;
