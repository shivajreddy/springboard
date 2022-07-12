import React from "react";

function LabelInput({ id, type, labelText }) {
  const [controlledState, setControlledState] = React.useState("");

  function handleChange(event) {
    setControlledState(event.target.value);
  }

  return (
    <div style={{ margin: "5px" }}>
      <label htmlFor={id}>{labelText}</label>
      <input
        value={controlledState}
        onChange={handleChange}
        id={id}
        type={type}
      />
      <br></br>
    </div>
  );
}

export default LabelInput;
