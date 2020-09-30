import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/homePage/HomePage.component";
import ServicesPage from "./pages/servicesPage/ServicesPage.component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
