import React, { useState, useEffect } from "react";
import Episode from "./Episode";

function Episodes() {
  function addEpisodes({ id, name, air_date, episode }) {
    return (
      <Episode
        key={id}
        id={id}
        name={name}
        air_date={air_date}
        episode={episode}
      />
    );
  }

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEpisodes(data.results); // <---------
      });
  }, []); // Pusty array dependency powoduje, że fetch zostanie wykonany tylko raz po zamontowaniu komponentu

  return <div id="glowny-episodes">{episodes.map((episode) => addEpisodes(episode))}</div>;
}

export default Episodes;
