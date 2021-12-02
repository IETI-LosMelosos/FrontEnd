import React from "react";
import "./MainPage.css";

function Header(){

return (
    <div className="header">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
            <div className="field" id="searchform" align="center">
                <br/>
                <input type="text" id="searchterm" placeholder="¿Qué estás buscando?" />
                <button className="buscar" type="button" id="search">Buscar</button>
            </div>
        </div>
        <div className="col-md-4" align="center">
            <div className="row">
                <div className="col-md-3" align="center">
                </div>
                <div className="col-md-3" align="center">
                    <br/>
                    <button type="submit" className="shoppingCar">Carrito</button>
                </div>
                <div className="col-md-3" align="center">
                    <br/>
                    <button type="submit" className="shoppingCar">Ingresar</button>
                </div>
                <div className="col-md-3" align="center">
                </div>
            </div>
        </div>
    </div>
);
}

export default Header;