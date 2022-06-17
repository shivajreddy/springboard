import React from 'react'
import { useNavigate } from "react-router-dom"

function Chips() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Chips</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Chips