import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import NewColor from "pages/NewColor";
import ColorPage from "pages/ColorPage";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colors" element={<HomePage />}></Route>
        <Route path="colors/:name" element={<ColorPage />} />
        <Route path="/colors/new" element={<NewColor />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
