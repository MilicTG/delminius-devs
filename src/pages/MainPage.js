import React, { Component } from "react";
import { Header, TitleSection, ServicesCard } from "../components";
import { Android } from "@styled-icons/fa-brands/Android";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <TitleSection title="Our services" />
        <ServicesCard icon={Android} />
      </>
    );
  }
}

export default MainPage;
