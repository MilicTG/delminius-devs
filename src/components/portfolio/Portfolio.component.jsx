import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <PortfolioTemp>
      <h2>Portfolio</h2>
      <p>Coming soon</p>
    </PortfolioTemp>
  );
};

export default Portfolio;

const PortfolioTemp = styled.div`
  display: flex;
  background: #303f9f;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 60rem;
  color: gray;
  font-size: 3rem;
`;
