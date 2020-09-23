import { css } from "styled-components";
import { above } from "./Breakpoints";

export const container = () => css`
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 1;
  ${above.large`
    padding: 0 5rem;
    max-width: 1300px;
  `}
`;

export const orangeShadow = () => css`
  box-shadow: 6px 6px 15px -2px rgba(244, 81, 30, 0.75);
`;

export const blackShadow = () => css`
  box-shadow: 6px 6px 15px -2px rgba(0, 0, 0, 0.75);
`;
