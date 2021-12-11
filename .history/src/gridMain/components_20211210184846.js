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
  return <div class>

  </div>
}
