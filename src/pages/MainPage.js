import React, { Component } from "react";

import {
  Header,
  TitleSection,
  ServicesSection,
  WhyMobile,
  Portfolio,
  AboutUs,
  Contact,
  Footer,
} from "../components";

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
        {/* <Contact />
        <Footer /> */}
      </>
    );
  }
}

export default MainPage;
