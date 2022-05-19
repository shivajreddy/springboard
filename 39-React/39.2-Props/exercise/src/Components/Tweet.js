const Tweet = (props) => {
  return (
    <>
      <h1>Part 2 - Tweet</h1>
      <ul>
        <li>{props.id || "21"}</li>
        <li>{props.username || "default username"}</li>
        <li>{props.name}</li>
        <li>{new Date().toDateString()}</li>
        <li>{props.message || "default messafe"}</li>
      </ul>
    </>
  )
};


export { Tweet }