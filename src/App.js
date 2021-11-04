import React from "react";
import {  BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LandingPage from "./components/signin";
import {CitySelect,MainPage} from './pages'
import {PaymentResponse} from './paymentResponse'
import {ShoopingCart} from './shoopingcart'

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
        <Route exact path="/paymentResponse">
          <PaymentResponse/>
        </Route>
        <Route exact path="/shoopingcart">
          <ShoopingCart/>
        </Route>
        <Route>
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;