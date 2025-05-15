import React, { useState, useEffect } from "react";
import Location from "./Location";

function Locations() {
  function addLocation({ id, name, dimension, type, image }) {
    return (
      <Location
        key={id}
        id={id}
        name={name}
        dimension={dimension}
        type={type}
        image={image}
      />
    );
  }
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLocations(data.results); // <---------
      });
  }, []); // Pusty array dependency powoduje, że fetch zostanie wykonany tylko raz po zamontowaniu komponentu
  return <div id="glowny-locations">{locations.map((location) => addLocation(location))}</div>;
}

export default Locations;
