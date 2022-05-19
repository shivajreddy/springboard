function Person(props) {
  const msg = (props.age > 18) ? "Go vote" : "cant vote grow up";
  return (
    <>
      <h2>Part 3</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{msg}</li>
      </ul>
    </>
  )
}

Person.propTypes = {}

export default Person