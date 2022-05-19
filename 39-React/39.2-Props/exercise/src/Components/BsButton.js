import './BsButton.css'

export default function BsButton(props) {
  // var bg_color;
  // if (props.color === 'primary') { bg_color = "primary" };
  // if (props.secondary) { bg_color = "secondary" };
  // if (props.black) { bg_color = "black" };
  // console.log(bg_color)
  return (
    <>
      <button className={props.color}>{props.text}</button>
    </>
  )
}
