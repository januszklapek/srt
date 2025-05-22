import React from "react";

function Location({ name, climate, terrain, population }) {
  return (
    <div className="locations" style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{name}</h3>
      <p><strong>Climate:</strong> {climate}</p>
      <p><strong>Terrain:</strong> {terrain}</p>
      <p><strong>Population:</strong> {population}</p>
    </div>
  );
}

export default Location;
