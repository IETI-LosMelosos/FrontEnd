import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ShoopingCart } from './shoopingcart';
import './resources/css/styles.css'
import { PaymentResponse } from './paymentResponse';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/paymentResponse">
          <PaymentResponse/>
        </Route>
        <Route path="/shoopingcart">
          <ShoopingCart/>
        </Route>
        <Route>
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
