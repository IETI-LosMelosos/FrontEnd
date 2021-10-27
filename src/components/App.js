import React from "react";
import {  Switch, Route } from "react-router-dom";
import LandingPage from "./signin";


function App() {
  return (
    
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
  
  );
}

export default App;