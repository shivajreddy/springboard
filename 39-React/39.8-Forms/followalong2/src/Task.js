import React from 'react'

function Task({ value, email }) {
  return (
    <div>
      <h3>{value}</h3>
      <h3> {email} </h3>
    </div>


  )
}

export default Task