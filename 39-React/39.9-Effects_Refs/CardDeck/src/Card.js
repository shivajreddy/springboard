import React from 'react'

function Card({ image, idx, transform }) {

  const styles = {
    backgroundImage: `url(${image})`,
    width: "226px",
    height: "314px",
    position: "absolute",
    "zIndex": idx,
    transform: transform,
    marginTop: "80px",
    marginLeft : "100px"
  }
  return (
    <div className="Card" style={{ ...styles }}>
    </div>
  )
}

export default Card