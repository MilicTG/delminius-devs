import { css } from "styled-components";
import { above } from "../util";

export const container = () => css`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  ${above.large`
  padding: 0 4rem;
   max-width: 1600px;
  `}
`;
