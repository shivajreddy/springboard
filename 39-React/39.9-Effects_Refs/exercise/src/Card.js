import React from 'react';
import './Card.css';

function Card({ code, imageUrl }) {

  const size = "226 x 314"

  const sampleData = {
    code: 'QC',
    image: 'https://deckofcardsapi.com/static/img/QC.png',
    // images: {… },
    value: 'QUEEN',
    suit: 'CLUBS'
  }

  return (
    <div className='Card' style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  )
}

export default Card