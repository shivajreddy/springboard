import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import axios from 'axios'

function Deck({maxCards}) {

  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  useEffect(startAutoDraw, [autoDraw]);
  useEffect(checkTotalCards, [cards]);
  const intervalId = useRef();

  const baseUrl = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  async function getDeck() {
    const response = await axios.get(baseUrl);
    const newDeckId = response.data.deck_id;
    setCards([]);
    setDeckId(newDeckId);
  }

  async function drawCard() {
    const response = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const newCardObject = response.data.cards[0];

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

  // Run this function after auto draw is on -> create an interval
  // every time the toggle button is changed, if no, clear the interval
  function startAutoDraw() {

    // create interval -> only if the autodraw button is on
    if (autoDraw) {
      intervalId.current = setInterval(() => {
        // console.log("Hi mom");
        // keep calling drawCard 
        drawCard();
      }, 500);
    }

    // return another fuction -> that cleans up after every unmount
    return () => clearInterval(intervalId.current);
  }

  function checkTotalCards() {
    console.log("total cards", cards);
    if (cards.length === maxCards) {
      setDeckId(null);
      setAutoDraw(false)
    }
  }

  return (
    <div>
      <div className="Deck-Control">
        {deckId && <h2>DECK id: {deckId} </h2>}
        {!deckId && <button onClick={getDeck}>New Deck</button>}
        {deckId && <button onClick={drawCard}>Draw Card</button>}
        {deckId ? (
          autoDraw ?
            <button onClick={() => autoDraw ? setAutoDraw(false) : setAutoDraw(true)}>STOP Auto Draw</button>
            : <button onClick={() => autoDraw ? setAutoDraw(false) : setAutoDraw(true)}>Auto Draw</button>
        ) : null}
      </div>
      <div className="Deck-Pile" >
        {cardsPile}
      </div>
    </div>
  )
}

export default Deck