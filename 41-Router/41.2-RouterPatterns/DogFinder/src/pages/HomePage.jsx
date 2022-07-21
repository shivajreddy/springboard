import React from "react";
// import Dog from "components/Dog";
import dogs from "dogs";
import { Link } from "react-router-dom";

function HomePage() {
  // map to dog components
  // const allDogs = dogs.map((dog) => <Dog />);
  const allDogLinks = dogs.map((dog) => (
    <li>
      <Link key={dog.name} to={`/dogs/${dog.name}`}>
        {dog.name}
      </Link>
    </li>
  ));
  console.log("All dogs", dogs);
  return (
    <>
      <h2>All Dogs</h2>
      {allDogLinks}
    </>
  );
}

export default HomePage;
