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

export const shadow = () => css`
  box-shadow: 10px 10px 34px -15px rgba(0, 0, 0, 0.56);
`;
