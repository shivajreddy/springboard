import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import Calculator from "pages/Calculator";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add">
          <Route path=":a/:b" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/subtract">
          <Route path=":a/:b" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/multiply">
          <Route path=":a/:b" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/divide">
          <Route path=":a/:b" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
