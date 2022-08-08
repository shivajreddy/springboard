import React from "react";
import { useParams } from "react-router-dom";
import dogs from "dogs";
import { NavLink } from "react-router-dom";

function Dog() {
  const params = useParams();
  const [dog] = React.useState(() =>
    dogs.find((dogObject) => dogObject.name === params.dogname)
  );
  console.log("these are the params", params, dog);
  return (
    <div>
      <main>
        <div className="Dog">
          <h1>Name: {dog.name}</h1>
          <h2>Age: {dog.age} </h2>
          <img src={dog.src} alt={params.dogname} width="400px" />
          <p>Fun facts about {dog.name}</p>
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </div>
      </main>
      <NavLink to="/dogs">All Dogs</NavLink>
    </div>
  );
}

export default Dog;
