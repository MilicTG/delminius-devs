import React, { Component } from "react";
import {
  Header,
  TitleSection,
  ServicesSection,
  WhyMobile,
} from "../components";

import { Portfolio, AboutUs } from "../sections";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <TitleSection title="Our services" />
        <ServicesSection />
        <WhyMobile />
        <Portfolio />
        <AboutUs />
      </>
    );
  }
}

export default MainPage;
