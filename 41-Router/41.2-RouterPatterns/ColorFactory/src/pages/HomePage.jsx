import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "styles/HomePage.css";

function HomePage() {
  // map to dog components
  // const allDogs = dogs.map((dog) => <Dog />);
  return (
    <div className="HomePage">
      <header className="HomePage-Header">
        <h1 style={{ textAlign: "center" }}>Color Factory</h1>
        <br />
        <NavLink to="/colors/new">Add a new Color</NavLink>
      </header>
      <section>
        <p>Please select a Color</p>
      </section>
    </div>
  );
}

export default HomePage;
