import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  fontSize1x,
  fontSize0,
  below,
} from "../../styles";

export const ButtonWrapper = styled.button`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? colorPrimary : colorSecondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.2rem 6.4rem" : "1rem 2rem")};
  color: ${colorWhite};
  font-size: ${({ fontBig }) => (fontBig ? fontSize1x : fontSize0)};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: ${colorWhite};
    background: ${({ primary }) => (primary ? colorSecondary : colorPrimary)};
  }
  ${below.med`
      width: 100%;
  `}
`;
