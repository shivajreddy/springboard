import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Dog from "components/Dog";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dogs" element={<HomePage />}></Route>
        <Route path="/dogs/:dogname" element={<Dog />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
