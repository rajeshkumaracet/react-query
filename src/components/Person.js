import React from "react";

export const Person = ({ people }) => {
  return (
    <div className="card">
      <h3>{people.name}</h3>
      <p>Population - {people.population}</p>
      <p>Terrain - {people.terrain}</p>
    </div>
  );
};
