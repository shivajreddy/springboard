import React from "react";
import "styles/NewColor.css";
import colorsArray from "colorsArray.";
import { NavLink, useNavigate } from "react-router-dom";

function NewColor() {
  const [name, setName] = React.useState("");
  const [colorHex, setColorHex] = React.useState("#ffffff");
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.value;
    if (name === "") return;
    setName(name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "") return;

    // add a new color
    colorsArray.splice(0, 0, {
      name: name,
      hex: colorHex,
      dateTime: Date.now(),
    });

    // reset the states after validated submission
    setName("");
    setColorHex("#ffffff");
    // navigate to home page
    navigate("/colors");
  }

  return (
    <div className="NewColor">
      {/* <h1> Add New Color</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="color-picker">Pick Color</label>
          <input
            type="color"
            id="color-picker"
            value={colorHex}
            onChange={(event) => setColorHex(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="color-name">Name:</label>
          <input
            id="color-name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button>Add Color</button>
      </form>
      <NavLink to="/colors">Go home</NavLink>
    </div>
  );
}

export default NewColor;
