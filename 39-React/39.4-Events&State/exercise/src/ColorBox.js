import React from 'react'

function ColorBox(props) {
  const random_color = props.all_colors[Math.floor(Math.random() * (props.all_colors.length))];
  console.log(random_color)
  return (
    <>
      <h4>This is the single box </h4>
      <p>RandomColor: {random_color}</p>
    </>
  )
}

export default ColorBox