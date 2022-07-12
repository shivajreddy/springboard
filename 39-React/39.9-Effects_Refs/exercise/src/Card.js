import React from 'react';
import './Card.css';

function Card({ code, imageUrl }) {

  // api image size "226 x 314"
  // const sampleData = {
  //   code: 'QC',
  //   image: 'https://deckofcardsapi.com/static/img/QC.png',
  //   // images: {… },
  //   value: 'QUEEN',
  //   suit: 'CLUBS'
  // }


  const angle = Math.random() * 90 - 45;
  const xPos = Math.random() * 40 - 20;
  const yPos = Math.random() * 40 - 20;

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  console.log(transform)

  const styles = {
    backgroundImage: `url(${imageUrl})`,
    transform: transform
  }

  return (

    // <div className='Card' style={{ backgroundImage: `url(${imageUrl})`, transform: transform }}>
    <div className='Card' style={{ ...styles }}>
    </div>
  )
}


export default Card