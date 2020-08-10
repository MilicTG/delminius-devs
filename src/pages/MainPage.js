import React, { Component } from "react";
import { Header, TitleSection, ServicesSection } from "../components";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <TitleSection title="Our services" />
        <ServicesSection />
      </>
    );
  }
}

export default MainPage;
