import React from "react";
import Card from "./Card";

function CardDeck({ hogs }) {
  let deck = hogs.map((hog) => <Card hog={hog} key={hog.name} />);
  return <div className="ui grid container">{deck}</div>;
}

export default CardDeck;

