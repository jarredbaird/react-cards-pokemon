import React from "react";
import useFlip from "./useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFaceUp, setIsFaceUp] = useFlip(true);
  return (
    <img
      src={isFaceUp ? front : back}
      alt="playing card"
      onClick={setIsFaceUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
