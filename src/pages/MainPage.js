import React, { Component } from "react";
import {
  Header,
  TitleSection,
  ServicesSection,
  WhyMobile,
} from "../components";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <TitleSection title="Our services" />
        <ServicesSection />
        <WhyMobile />
      </>
    );
  }
}

export default MainPage;
