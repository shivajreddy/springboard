import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import NewColor from "pages/NewColor";
import ColorPage from "pages/ColorPage";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/colors" element={<HomePage />}> */}
        <Route path="/colors">
          <Route index={true} element={<HomePage />} />
          <Route path="new" element={<NewColor />} />
          <Route path=":name" element={<ColorPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/colors" replace={true} />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
