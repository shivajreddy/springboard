import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Deck() {

  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);

  const baseUrl = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  async function getDeck() {
    const response = await axios.get(baseUrl);
    const newDeckId = response.data.deck_id;
    setDeckId(newDeckId);
  }

  async function drawCard() {
    const response = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const newCardObject = response.data.cards[0];

    // rotation is also being added to the deck object
    const angle = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    newCardObject["transform"] = transform;

    setCards(prevCardObjects => {
      return [...prevCardObjects, newCardObject];
    })
  }

  // Map the cards state into div
  const cardsPile = [];
  cards.map((cardObject, idx) => cardsPile.push(
    <Card
      key={cardObject.code}
      image={cardObject.image}
      idx={idx + 1}
      transform={cardObject.transform}
    />
  ))

  return (
    <div>
      {deckId && <h2>DECK id: {deckId} </h2>}
      {!deckId && <button onClick={getDeck}>New Deck</button>}
      {deckId && <button onClick={drawCard}>Draw Card</button>}
      <div className="Deck-Pile" >
        {cardsPile}
      </div>
    </div>
  )
}

export default Deck