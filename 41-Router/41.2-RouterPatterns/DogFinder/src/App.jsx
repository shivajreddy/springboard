import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "components/Nav";
import HomePage from "pages/HomePage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dogs"></Route>
      </Routes>
    </div>
  );
}

export default App;
