import React from "react";

const DisplayedCats = ({ displayedCats }) => {
  return (
    <div>
      <h3>Previously Displayed Cats:</h3>
      <ul className="cat-history">
        {displayedCats.length > 0 ? (
          displayedCats.map((cat, index) => (
            <li key={index}>
              <p>
                <strong>{cat.name}</strong> - A cat from {cat.origin}
              </p>
              <img src={cat.image} alt={cat.name} />
            </li>
          ))
        ) : (
          <p>No cats displayed yet.</p>
        )}
      </ul>
    </div>
  );
};

export default DisplayedCats;
