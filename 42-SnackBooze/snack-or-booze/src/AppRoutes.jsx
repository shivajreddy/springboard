import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Home";
import FoodMenu from "FoodMenu";
import Snack from "FoodItem";
import SnackOrBoozeApi from "Api";

function AppRoutes() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [snacks, setSnacks] = React.useState([]);

  React.useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    // <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home snacks={snacks} />}></Route>
        <Route
          path="/snacks"
          element={<FoodMenu snacks={snacks} title="Snacks" />}
        ></Route>
        <Route
          path="/snacks/:id"
          element={<Snack items={snacks} cantFind="/snacks" />}
        ></Route>
        <Route
          element={<p>Hmmm. I can't seem to find what you want.</p>}
        ></Route>
      </Routes>
    </main>
    // </BrowserRouter>
  );
}

export default AppRoutes;
