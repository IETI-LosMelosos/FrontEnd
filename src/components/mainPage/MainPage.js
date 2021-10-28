import React from "react";
import "./MainPage.css";
import Card from "./Card";
import "./card.css";

const products = [
      {
        id: 1,
        name: "Tomate",
        image: "/img/campesino1/tomate.jpg",
        price: "$8.500",
        description: "Tomate chonto 1000 gr",
        producedBy: "Don Ramiro - Boyacá"
      },
      {
        id: 2,
        name: "Papa pastusa",
        image: "/img/campesino1/papa_pastusa.jpg",
        price: "$3.800",
        description: "Papa pastusa 1 Kg",
        producedBy: "Don Ramiro - Boyacá"
      },
      {
        id: 3,
        name: "Papa criolla",
        image: "/img/campesino1/papa_criolla.jpg",
        price: "$7.500",
        description: "Papa criolla 1 kg",
        producedBy: "Don Ramiro - Boyacá"
      },
      {
        id: 4,
        name: "Lechuga romana",
        image: "/img/campesino1/lechuga_romana.jpg",
        price: "$5.300",
        description: "Lechiga romana tierna 400 gr",
        producedBy: "Don Ramiro - Boyacá"
      },
      {
        id: 5,
        name: "Fresas",
        image: "/img/campesino2/fresas.jpg",
        price: "$6.800",
        description: "Fresa extra 500 gr",
        producedBy: "Pacho y Anita - Cundinamarca"
      },
      {
        id: 6,
        name: "Lechuga crespa",
        image: "/img/campesino2/lechuga_crespa.jpg",
        price: "$4.000",
        description: "Lechuga crespa fresca 180 gr",
        producedBy: "Pacho y Anita - Cundinamarca"
      },
      {
        id: 7,
        name: "Mazorca",
        image: "/img/campesino2/mazorca.jpg",
        price: "$1.800",
        description: "Mazorca entera 1 Und",
        producedBy: "Pacho y Anita - Cundinamarca"
      },
      {
        id: 8,
        name: "zanahoria",
        image: "/img/campesino2/zanahoria.jpg",
        price: "$1.400",
        description: "Zanahoria 1 Und",
        producedBy: "Pacho y Anita - Cundinamarca"
      },
      {
        id: 9,
        name: "Arándanos",
        image: "/img/campesino3/arandanos.jpg",
        price: "$7.400",
        description: "Arándanos 125 gr",
        producedBy: "Clarita y Danilo - Santander"
      },
      {
        id: 10,
        name: "Mazorca",
        image: "/img/campesino3/mazorca.jpg",
        price: "$13.500",
        description: "Mazorca entera 500 gr",
        producedBy: "Clarita y Danilo - Santander"
      },
      {
        id: 11,
        name: "Tomate",
        image: "/img/campesino3/tomate.jpg",
        price: "$700",
        description: "Tomate chonto 1 Und",
        producedBy: "Clarita y Danilo - Santander"
      },
      {
        id: 12,
        name: "Arándanos",
        image: "/img/campesino4/arandanos.jpg",
        price: "$22.000",
        description: "Arándanos 1000 gr",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 13,
        name: "Cilantro",
        image: "/img/campesino4/cilantro.jpg",
        price: "$3.400",
        description: "Cilantro Kosher 100 gr",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 14,
        name: "Espinaca",
        image: "/img/campesino4/espinaca.jpg",
        price: "$6.000",
        description: "Espinaca 150 gr",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 15,
        name: "Fresas",
        image: "/img/campesino4/fresas.jpg",
        price: "$4.200",
        description: "Fresa 250 gr",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 16,
        name: "Limón",
        image: "/img/campesino4/limon.jpg",
        price: "$6.600",
        description: "Limón orgánico 1 kg",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 17,
        name: "Papa criolla",
        image: "/img/campesino4/papa-criolla.jpg",
        price: "$6.500",
        description: "Papa criolla mediana 1000 gr",
        producedBy: "Doña Martha - Boyacá"
      },
      {
        id: 18,
        name: "Cilantro",
        image: "/img/campesino5/cilantro.jpg",
        price: "$3.500",
        description: "Cilantro Hidroponico 75 gr",
        producedBy: "Don Benigno - Cundinamarca"
      },
      {
        id: 19,
        name: "Limón",
        image: "/img/campesino5/limon.jpg",
        price: "$5.600",
        description: "limon tahiti 1000gr",
        producedBy: "Don Benigno - Cundinamarca"
      },
      {
        id: 20,
        name: "Papa pastusa",
        image: "/img/campesino5/papa_pastusa.jpg",
        price: "$13.500",
        description: "Papa pastusa 5000 gr",
        producedBy: "Don Benigno - Cundinamarca"
      },
      {
        id: 21,
        name: "Yuca",
        image: "/img/campesino5/yuca.jpg",
        price: "$6.500",
        description: "Yuca 1 kg",
        producedBy: "Don Benigno - Cundinamarca"
      },
      {
        id: 22,
        name: "Zanahoria baby",
        image: "/img/campesino5/zanahoria_baby.jpg",
        price: "$10.600",
        description: "Zanahoria baby natural 250 gr",
        producedBy: "Don Benigno - Cundinamarca"
      }
];

function MainPage(){

return (
<div>
    <div className="row">
          <div className="header">
            <button type="submit" className="shoppingCar">
                <img src="/img/carrito.png" width="50" height="50" alt="submit"/>
            </button>
          </div>
    </div>
    <div className="field" id="searchform" align="right">
      <br/>
      <input type="text" id="searchterm" placeholder="¿Qué estás buscando?" />
      <button type="button" id="search">Buscar</button>
      <br/><br/>
    </div>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {products.map(({ image, name, price,description, producedBy, id }) => (
          <div className="col-md-3" key={id} height="10%" width="10%" >
            <br/>
            <Card imageSource={image} name={name} price={price} description={description} producedBy={producedBy} />
          </div>
        ))}
      </div>
    </div>
</div>
  );
}

export default MainPage;