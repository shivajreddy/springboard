import React, { useState } from "react";
import "./PokemonCard.css";
import useFlipCard from "./hooks";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flipCard] = useFlipCard(true);
  // const [isFacingUp, setIsFacingUp] = useState(false);
  // const flipCard = () => {
  //   setIsFacingUp((isUp) => !isUp);
  // };
  return (
    <div onClick={flipCard} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map((stat) => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
