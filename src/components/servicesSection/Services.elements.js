import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  fontSize4x,
  fontSize0,
  above,
  below,
} from "../../styles";

export const ServicesWrapper = styled.div`
  padding: 10rem 0 16rem;
  display: flex;
  justify-content: center;
  background: ${colorWhite};
`;

export const ServicesContainer = styled.div`
  ${container}
`;

export const ServicesHeading = styled.h1`
  color: ${colorSecondary};
  font-size: ${fontSize4x};
  margin-bottom: 24px;
`;

export const ServicesCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
