import React from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
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
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home snacks={snacks} />}></Route>
            <Route
              exact
              path="/snacks"
              element={<Menu snacks={snacks} title="Snacks" />}
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
      </BrowserRouter>
    </div>
  );
}

export default App;
