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

export const blackShadow = () => css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const cardShadow = () => css`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const cardShadowHover = () => css`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
