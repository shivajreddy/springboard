function BallButtons(props) {
  return (
    <>
      <h3>Buttons</h3>
      {props.all_colors.map(color => {
        return <button key={color} onClick={() => props.addBall(color)}>{color}</button>
      })}
    </>
  )
}

export default BallButtons


BallButtons.defaultProps = {
  all_colors: ["red", "yellow"]
}