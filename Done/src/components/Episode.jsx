import React from "react";

function Episode(props) {
  return (
    <div class='episodes'>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>air date: {props.air_date}</p>
      <p>episode: {props.episode}</p>
    </div>
  );
}

export default Episode;
