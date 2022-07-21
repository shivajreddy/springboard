import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "styles/HomePage.css";
import ColorPage from "pages/ColorPage";
import colorsArray from "colorsArray.";

function HomePage() {
  const [colors, setColors] = React.useState(colorsArray);
  /* color object
  {"name" : "somename",
    "hex" : "ffffff"},
    "dateTime" : "xxx"
  */

  return (
    <div className="HomePage">
      <header className="HomePage-Header">
        <h1 style={{ textAlign: "center" }}>CF</h1>
        <br />
        <NavLink to="/colors/new">Add a new Color</NavLink>
      </header>
      <section>
        {colors.length > 0 && <p>Please select a Color</p>}
        {colors.map((color) => {
          return (
            <li key={`${color.name}${color.hex}`}>
              <NavLink to={`/colors/${color.name}`}>{color.name}</NavLink>
            </li>
            // <ColorPage hex={color.hex} name={color.name} key={color.name} />
          );
        })}
      </section>
    </div>
  );
}

export default HomePage;
