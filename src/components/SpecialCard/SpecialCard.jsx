import React from "react";
import dish from "../../assets/Dish.svg";
import "./SpecialCard.css";

function SpecialCard({ image, title, price, details }) {
  return (
    <div className="special-card-container">
      <img src={image} alt="special-card-img" />
      <div className="special-card-body">
        <div>
          <h3>{title}</h3>
          <h5>{price}</h5>
        </div>
        <p>{details}</p>
        <div className="special-card-button">
          <h4>Order a delivery</h4>
          <img src={dish} alt="dish-icon" />
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
