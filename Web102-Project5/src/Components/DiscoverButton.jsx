import React from "react";

const DiscoverButton = ({ fetchRandomBreedImages }) => {
  return (
    <button className="discover-btn" onClick={fetchRandomBreedImages}>
      Discover Random Cat
    </button>
  );
};

export default DiscoverButton;
