import styled from "styled-components";
import {
  colorPrimary,
  colorWhite,
  colorFontPrimary,
  container,
  fontSize2x,
  fontSize0,
  cardShadow,
  cardShadowHover,
  above,
  below,
} from "../../styles";

export const ServicesWrapper = styled.div`
  padding: 5rem 0 10rem 0;
  display: flex;
  justify-content: center;
  background: ${colorWhite};
`;

export const ServicesContainer = styled.div`
  ${container}
  display: flex;
  justify-content: center;
`;

export const ServicesCardWrapper = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: 1fr;
  ${above.med`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  padding: 2rem;
  min-height: 35rem;
  ${cardShadow}
  &:hover {
    transition: all 0.3s ease-out;
    ${cardShadowHover}
  }
`;

export const CardIconHolder = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 7rem;
  height: 7rem;
  color: ${colorPrimary};
  svg {
    padding: 0;
    margin: 0 auto;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${fontSize2x};
  color: ${colorFontPrimary};
`;

export const CardText = styled.p`
  font-size: ${fontSize0};
  color: ${colorFontPrimary};
`;
