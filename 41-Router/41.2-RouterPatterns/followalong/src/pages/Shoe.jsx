import React from 'react'

function Shoe({id}) {
  console.log(id)
  return (
    <div>
      <h1>shoe</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default Shoe