import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Home";
import FoodMenu from "FoodMenu";
import Item from "Item";
import SnackOrBoozeApi from "Api";

function AppRoutes() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [snacks, setSnacks] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Home snacks={snacks} drinks={drinks} />}
        ></Route>

        <Route
          path="/snacks"
          element={<FoodMenu snacks={snacks} title="Snacks" />}
        ></Route>
        <Route
          path="/snacks/:id"
          element={<Item type="food" items={snacks} cantFind="/snacks" />}
        ></Route>

        <Route
          path="/drinks"
          element={<FoodMenu drinks={drinks} title="Drinks" />}
        ></Route>
        <Route
          path="/drinks/:id"
          element={<Item type="drink" items={drinks} cantFind="/drinks" />}
        ></Route>

        <Route
          path="*"
          element={<Home snacks={snacks} drinks={drinks} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default AppRoutes;
