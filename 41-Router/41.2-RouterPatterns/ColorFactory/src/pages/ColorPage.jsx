import React from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import colorsArray from "colorsArray.";
import "styles/ColorPage.css";

function ColorPage() {
  let params = useParams();
  const navigate = useNavigate();
  const [colorObject, setColorObject] = React.useState(() => {
    return colorsArray.find((obj) => obj.name === params.name);
  });

  React.useEffect(() => {
    // redirect if there is not color found as the given URL param
    if (!colorObject) {
      navigate("/colors");
    }
  }, [colorObject, navigate]);

  return (
    colorObject && (
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
    )
  );
}

export default ColorPage;
