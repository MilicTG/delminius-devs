import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  fontSize2x,
  fontSize0,
  below,
} from "../../styles";

export const TheTeamWrapper = styled.section`
  padding: 1rem 0 5rem 0;
  background: ${colorPrimary};
  display: flex;
  justify-content: center;
`;

export const TheTeamContainer = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const TheTeamHeadline = styled.h3`
  color: ${colorSecondary};
  font-size: ${fontSize0};
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 3.5rem;
`;

export const TheTeamCardContainer = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  ${below.med`
    grid-template-columns: 1fr 1fr;
  `}
  ${below.small`
    grid-template-columns: 1fr;
  `}
`;

export const TheTeamCard = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

export const TheTeamHead = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const TheTeamTitle = styled.h3`
  font-size: ${fontSize2x};
  color: ${colorWhite};
  margin: 1.5rem 0;
`;

export const TheTeamDesc = styled.p`
  font-size: ${fontSize0};
  color: ${colorWhite};
  margin: 1rem 0;
`;
