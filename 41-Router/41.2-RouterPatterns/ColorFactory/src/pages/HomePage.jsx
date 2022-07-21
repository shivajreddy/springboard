import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "styles/HomePage.css";
import Color from "components/Color";

function HomePage() {
  // map to dog components
  // const allDogs = dogs.map((dog) => <Dog />);
  const [colors, setColors] = React.useState([]);

  return (
    <div className="HomePage">
      <header className="HomePage-Header">
        <h1 style={{ textAlign: "center" }}>Color Factory</h1>
        <br />
        <NavLink to="/colors/new">Add a new Color</NavLink>
      </header>
      <section>
        <p>Please select a Color</p>
        {colors.map((color) => {
          return <Color />;
        })}
      </section>
    </div>
  );
}

export default HomePage;
