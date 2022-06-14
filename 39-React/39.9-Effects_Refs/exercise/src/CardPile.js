
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card';
import './CardPile.css';


const baseUrl = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

function CardPile() {

  const [deckId, setDeckId] = useState(null);

  const [cards, setCards] = useState([]);

  const [autoDraw, setAutoDraw] = useState(false);
  // const [intervalId, setIntervalId] = useState(null);

  async function newDeck() {
    const res = await axios.get(baseUrl);
    const deckId = res.data.deck_id;
    setDeckId(deckId);
    // console.log(res);
  }

  const cardsDiv = [];
  // Add Card components to cardsDiv only if cards is not null
  if (cards) {
    cards.map(cardObject => {
      const cardComponent = <Card key={cardObject.code} code={cardObject.code} imageUrl={cardObject.img} />
      cardsDiv.push(cardComponent);
    })
  }

  async function drawCard() {
    const res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const card = res.data.cards[0];
    // console.log(res);
    // <Card imageUrl={card.image} />
    setCards(prevCards => {
      const newCards = [...prevCards];
      newCards.push({ code: card.code, img: card.image });
      setCards(newCards);
    })
  }

  // Auto Draw
  // Should only run once.
  function runAutoDraw() {
    setAutoDraw(!autoDraw);
    let newId;
    if (autoDraw) {
      console.log("will clear if interval exists, else start interval");
      newId = setInterval(() => {
        console.log("running interval", newId);
      }, 1000);
    }
    else {
      console.log("clearingL", newId);
      // clearInterval(newId);
      // setIntervalId(null);
      return () => {
        clearInterval(newId);
      }
    }
    // setAutoDraw(!autoDraw);
  }

  // clean up fn
  function cleanIntervaFn() {
    // console.log('hi')
    // return console.log("clean")
  }


  // useEffect(cleanIntervaFn, [autoDraw])
  useEffect(() => {
    /*
    Query logic
    */
    console.log('i fire once');
  }, []);

  const handleSubmit = () => newDeck();

  return (
    <div className='CardPile'>

      <div className='CardPile-Deck'>
        {cardsDiv}
      </div>
      <div>
        {deckId && <button onClick={drawCard}>Draw Card</button>}
        {deckId && <button onClick={runAutoDraw}>Auto Draw</button>}
        {/* {deckId && <button onClick={() => setAutoDraw(!autoDraw)}>Auto Draw</button>} */}
      </div>

      {!deckId && <button onClick={handleSubmit}>Open a Deck</button>}

    </div>
  )
}

export default CardPile