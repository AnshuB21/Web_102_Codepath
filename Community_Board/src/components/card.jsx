import React from "react";
import "./Card.css";

const Card = ({ name, description, imageUrl, websiteLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a
          //target =_blank will open the page in new tab
          //noopener will prevent from window access
          href={websiteLink}
          target="_blank"
          rel="noopener"
          className="card-button"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
