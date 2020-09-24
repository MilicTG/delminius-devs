import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  fontSize3x,
  above,
} from "../../styles";

export const TitlebarWrapper = styled.div`
  width: 100%;
  background: ${({ backgroundPrimary }) =>
    backgroundPrimary ? colorPrimary : colorWhite};
  padding: 5rem 0 0 0;
`;

export const TitlebarContainer = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const TitlebarDecoration = styled.div`
  padding: 3rem, 0;
  height: 0.7rem;
  width: 7rem;
  background: ${colorSecondary};
  ${above.med`
   width: 8rem;
  `}
  ${above.large`
   width: 9rem;
  `}
`;

export const TitlebarTitle = styled.h2`
  font-size: ${fontSize3x};
  margin: 1rem 0;
  color: ${({ fontColor }) => (fontColor ? "#595959" : colorWhite)};
`;
