import './BsCard.css'

function BsCard(props) {
  return (
    <div className="bs-card">
      <h1 className="title">{props.title}</h1>
      <p className="body">{props.body}</p>
    </div>
  )
}

// Define the propTypes
BsCard.propTypes = {}

export default BsCard