import React from 'react'
import {useNavigate} from "react-router-dom"

function Soda() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Soda</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Soda