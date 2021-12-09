import React from "react";
import {  BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LandingPage from "./components/signin";
import {CitySelect,MainPage,AboutUs} from './pages'
import {PaymentResponse} from './paymentResponse'
import {ShoopingCart} from './shoopingcart'
import './resources/css/styles.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Main from "./components/mainPage/MainPage";
import { pruebas } from "./pages/pruebas";

function App() {

  const loginbuttonClick = (event)=>{
    event.preventDefault()
    window.location.pathname="/login"
  }

  const homebuttonClick = (event)=>{
    event.preventDefault()
    window.location.pathname=""
  }

  const shoopingCartClick = (event)=>{
    event.preventDefault()
    window.location.pathname="/shoopingcart"
  }

  return (
    <Router>
      <Route exact path="/pruebas">
          <pruebas/>
            </Typography>
            <Button color="inherit" onClick={shoopingCartClick}>Carrito</Button>
            <Button color="inherit" onClick={loginbuttonClick}>Login</Button>
            <Button color="inherit" onClick={homebuttonClick}>Home</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Switch>
        <Route exact path="/citySelect">
          <CitySelect/>
        </Route>
        <Route exact path="/login" component={LandingPage} />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/products" component={Main}/>
        <Route exact path="/paymentResponse">
          <PaymentResponse/>
        </Route>
        <Route exact path="/shoopingcart">
          <ShoopingCart/>
        </Route>
        <Route exact path="/about">
          <AboutUs/>
        </Route>
        
        <Route>
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
