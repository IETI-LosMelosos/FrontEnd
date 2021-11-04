import React from "react";
import {  BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LandingPage from "./signin";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/citySelect">
          <CitySelect/>
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Route exact path="/login" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;