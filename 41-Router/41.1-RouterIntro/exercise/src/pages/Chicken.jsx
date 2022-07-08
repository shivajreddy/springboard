import React from 'react'
import { useNavigate } from "react-router-dom"

function Chicken() {

  let navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Chicken</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Chicken