import React from "react";

import {
  TitlebarWrapper,
  TitlebarContainer,
  TitlebarDecoration,
  TitlebarTitle,
} from "./Titlebar.elements.js";

const Titlebar = ({ title, backgroundPrimary, fontColor }) => {
  return (
    <TitlebarWrapper backgroundPrimary={backgroundPrimary}>
      <TitlebarContainer>
        <TitlebarDecoration />
        <TitlebarTitle fontColor={fontColor}>{title}</TitlebarTitle>
      </TitlebarContainer>
    </TitlebarWrapper>
  );
};

export default Titlebar;
