import React from "react";
import { NavLink, useParams } from "react-router-dom";
import colorsArray from "colorsArray.";
import "styles/ColorPage.css";

function ColorPage() {
  let params = useParams();
  const [colorObject, setColorObject] = React.useState(() => {
    return colorsArray.find((obj) => obj.name === params.name);
  });
  return (
    <div className="ColorPage" style={{ backgroundColor: colorObject.hex }}>
      <h2>{colorObject.name}'s details</h2>
      <p>
        Name:
        {colorObject.name}
      </p>
      <p>
        Hex-Code:
        {colorObject.hex}
      </p>
      <p>
        Time Created:
        {new Date(colorObject.dateTime).toString()}
      </p>
      <NavLink to="/colors">Go home</NavLink>
    </div>
  );
}

export default ColorPage;
