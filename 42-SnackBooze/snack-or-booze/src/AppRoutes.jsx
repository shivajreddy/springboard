import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Home";
import Item from "Item";
import Items from "Items";
import SnackOrBoozeApi from "Api";
import NewItem from "NewItem";

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
          // element={<ItemMenu snacks={snacks} title="Snacks" />}
          element={<Items type="snacks" />}
        ></Route>
        <Route
          path="/snacks/:id"
          element={<Item type="snacks" cantFind="/snacks" />}
        ></Route>

        <Route
          path="/drinks"
          // element={<ItemMenu drinks={drinks} title="Drinks" />}
          element={<Items type="drinks" />}
        ></Route>
        <Route
          path="/drinks/:id"
          element={<Item type="drinks" cantFind="/drinks" />}
        ></Route>

        <Route
          path="/add-snack-item"
          element={<NewItem type="snack" />}
        ></Route>
        <Route
          path="/add-drink-item"
          element={<NewItem type="drink" />}
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
