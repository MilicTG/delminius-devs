import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  fontSize1x,
  fontSize0,
  below,
  cardShadow,
  cardShadowHover,
} from "../../styles";

export const ButtonWrapper = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? colorPrimary : colorSecondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "3rem 9rem" : "1.5rem 4rem")};
  color: ${colorWhite};
  font-size: ${({ fontBig }) => (fontBig ? fontSize1x : fontSize0)};
  outline: none;
  border: none;
  cursor: pointer;
  ${cardShadow}
  &:hover {
    transition: all 0.3s ease-out;
    background: ${colorWhite};
    background: ${({ primary }) => (primary ? colorSecondary : "#F4623A")};
    ${cardShadowHover}
  }
  ${below.med`
      width: 100%;
  `}
`;
