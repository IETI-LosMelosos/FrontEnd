import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ imageSource, name, price, description, producedBy }) {

  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" width="100%" height="100%"/>
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{price}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  description: PropTypes.string,
  producedBy: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;