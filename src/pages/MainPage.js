import React, { Component } from "react";

import {
  Header,
  Portfolio,
  AboutUs,
  WhyMobile,
  ServicesSection,
  TitleSection,
  Contact,
  Footer,
} from "../sections";

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
        <Contact />
        <Footer />
      </>
    );
  }
}

export default MainPage;
