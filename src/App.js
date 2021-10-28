import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import Main from "./components/mainPage/MainPage";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}