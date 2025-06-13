import React from "react";
import "./ReviewCard.css";
import { StarIcon } from "@phosphor-icons/react";

function ReviewCard({ name, image, review }) {
  return (
    <div className="review-card-container">
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} size={16} weight="fill" />
        ))}
      </div>
      <div>
        <img src={image} alt="reviewer-image" />
        <h3>{name}</h3>
      </div>
      <p>{review}</p>
    </div>
  );
}

export default ReviewCard;
