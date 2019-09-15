import "./card.style.css";

import React from "react";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="mosnter"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
