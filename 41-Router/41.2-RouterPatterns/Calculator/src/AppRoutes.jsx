import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
