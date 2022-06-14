
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card';
import './CardPile.css';


const baseUrl = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

function CardPile() {

  const [deckId, setDeckId] = useState(null);

  const [cards, setCards] = useState([]);

  const [autoDrawId, setAutoDrawId] = useState(null);
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
      const cardComponent = <Card key={cardObject.code} code={cardObject.code} imageUrl={cardObject.img} />;
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
    // set a new interval, assign that id to the state
    if (!autoDrawId) {
      const id = setInterval(() => {
        drawCard();
      }, 500);
      setAutoDrawId(id);
    } else {
      console.log("going to shutdown", autoDrawId);
      clearInterval(autoDrawId);
      setAutoDrawId(null);
    }
    // toggle the autodraw status
  }

<<<<<<< HEAD
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
=======
  // Cleaning function -> after every rendering check if 52 cards are drawn or not
  function cleanFunction() {
    console.log("length now is", cards.length);
    if (cards.length === 52) {
      console.log("oh no stop");
      // setCards([]);
      clearInterval(autoDrawId);
      setAutoDrawId(null);
      // setDeckId(null);
    }
  }

  useEffect(cleanFunction, [cards, autoDrawId])
>>>>>>> refs/remotes/origin/main

  // ref to the button "Open a Deck" and change the name to "Open new deck"


  // const handleSubmit = () => newDeck();

  return (
    <div className='CardPile'>

      <div className='CardPile-Deck'>
        {cardsDiv}
      </div>
      <div className='CardPile-Controls'>
        {deckId && <button onClick={drawCard}>Draw Card</button>}
        {deckId && <button onClick={runAutoDraw}>Auto Draw</button>}
        {!deckId && <button onClick={newDeck}>Open a Deck</button>}
      </div>


    </div>
  )
}

export default CardPile