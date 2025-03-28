import React from "react";

const SelectedBreed = ({ selectedBreed, handleFilterCountry }) => {
  return (
    <div className="selected-breed">
      <ul>
        <li>
          <strong>Name:</strong> {selectedBreed.name}
        </li>
        <li>
          <button onClick={() => handleFilterCountry(selectedBreed.origin)}>
            <strong>Origin:</strong> {selectedBreed.origin}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterCountry(selectedBreed.wikipedia_url)}
          >
            <a
              href={selectedBreed.wikipedia_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              WikiLink
            </a>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleFilterCountry(selectedBreed.weight.imperial)}
          >
            {selectedBreed.weight.imperial}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SelectedBreed;
