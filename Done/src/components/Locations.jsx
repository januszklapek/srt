import React, { useEffect, useState } from "react";


function Locations() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="locations-page">
      <div className="location-grid">
        {planets.map((planet, index) => (
          <div className="location-card" key={index}>
            <div className="location-content">
              <h3>{planet.name}</h3>
              <p><strong>UID:</strong> {planet.uid}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
