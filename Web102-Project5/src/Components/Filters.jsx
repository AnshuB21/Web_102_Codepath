import React from "react";

const Filters = ({ excludedCountries }) => {
  return (
    <div>
      <h3>Applied Filters:</h3>
      <ul>
        {excludedCountries.length > 0 ? (
          excludedCountries.map((filter, index) => (
            <li key={index}>
              <p>{filter}</p>
            </li>
          ))
        ) : (
          <p>No filters used</p>
        )}
      </ul>
    </div>
  );
};

export default Filters;
