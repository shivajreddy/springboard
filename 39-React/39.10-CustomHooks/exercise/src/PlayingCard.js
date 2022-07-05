import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlipCard } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlipCard(false);

  const res = useFlipCard();
  return (
    <div>
      {res}
      <img
        src={isFacingUp ? front : back}
        alt="playing card"
        onClick={flipCard}
        className="PlayingCard Card"
      />
    </div>
  );
}

export default PlayingCard;
