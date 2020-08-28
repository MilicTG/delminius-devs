import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Navigation } from "./components";
import Main from "./pages/MainPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
