import styled from "styled-components";
import {
  colorPrimary,
  colorWhite,
  colorFontPrimary,
  container,
  fontSize2x,
  fontSize0,
  above,
} from "../../styles";

export const ServicesWrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  background: ${colorWhite};
  ${above.large`
    padding: 10rem 0 3rem 0;
  `}
`;

export const ServicesContainer = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  flex-flow: column;
`;

export const TopLine = styled.div`
  color: ${colorFontPrimary};
  font-size: ${fontSize0};
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 3.5rem;
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
  padding: 3rem 1rem;
`;

export const CardIconHolder = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
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
