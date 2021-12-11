import React from "react";

function Square(props) {
  const { name , link } = props;

  const handleClick = (event) => {
    event.preventDefault();
    window.location.pathname= "/" + event.target.dataset.link;
  };

  return (
    <button className="ButtonGrid" onClick={handleClick} data-link={link}>
      {name}
    </button>
  );
}
// modificar los links de productos y campesinos al momento necesario
export function GridMain(props) {
  return (
    <div class>
      <button className="mainButton">boton</button>
      <div className="MainGridRow">
        <div className="MainGridColumn">
          <Square name="Productos" link ="citySelect"/> 
          <Square name="Campesinos" link ="citySelect"/>
        </div>
      </div>
      <div className="MainGridRow">
        <div className="MainGridColumn">
          <Square name="Sobre Nosotros" link ="about"/>
          <Square name="Estadisticas" link ="estadisticas"/>
        </div>
      </div>
    </div>
  );
}
