import React from "react";

function Location(props) {
  return (
    <div class='locations'>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>dimension {props.dimension}</p>
      <p>type {props.type}</p>
    </div>
  );
}

export default Location;
