import { css } from "styled-components";
import { above } from "./Breakpoints";

export const container = () => css`
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  ${above.large`
   max-width: 1600px;
  `}
`;
