import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/homePage/HomePage.component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
