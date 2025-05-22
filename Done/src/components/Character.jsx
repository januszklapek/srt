import React from "react";

function Character({ name, image, gender, species, height, affiliations }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.jpg";
        }}
      />
      <div className="card-content">
        <h2>{name}</h2>
        <p>Gender: {gender}</p>
        <p>Species: {species || "unknown"}</p>
        <p>Height: {height} cm</p>
        <p>Affiliation: {affiliations?.[0] || "unknown"}</p>
      </div>
    </div>
  );
}

export default Character;
