import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.slice(0, 87));
      })
      .catch((err) => console.error("Błąd ładowania postaci:", err));
  }, []);

  return (
    <div className="characters-page">
      <div className="card-grid">
        {characters.map((char) => (
          <div className="card" key={char.id}>
            <img
              src={char.image}
              alt={char.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg";
              }}
            />
            <div className="card-content">
              <h2>{char.name}</h2>
              <p>Affiliation: {char.affiliations?.[0] || "unknown"}</p>
              <p>Species: {char.species || "unknown"}</p>
              <p>Gender: {char.gender}</p>
              <p>Height: {char.height} cm</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
