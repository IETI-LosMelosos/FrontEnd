import React from "react";
import {  BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LandingPage from "./signin";
import {CitySelect,MainPage} from '../pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/citySelect">
          <CitySelect/>
        </Route>
        <Route exact path="/login" component={LandingPage} />
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;