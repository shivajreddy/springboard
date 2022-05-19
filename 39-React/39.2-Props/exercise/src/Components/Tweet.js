const Tweet = (props) => {
  // props.test = 31;
  return (
    <>
      <h1>Part 2 - Tweet</h1>
      <ul>
        <li>{props.id || "21"}</li>
        <li>{props.username || "default username"}</li>
        <li>{props.name}</li>
        <li>{new Date().toDateString()}</li>
        <li>{props.message || "default messafe"}</li>
        <p>{props.test}</p>

        <ol>
          {props.msgs.map(msg => <li>{msg}</li>)}
        </ol>

      </ul>
    </>
  )
};


export { Tweet }