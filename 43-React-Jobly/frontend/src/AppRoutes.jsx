import React from "react";
import NavBarMain from "components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <NavBarMain />
        <Routes>
          <Route path="/page-1" element={<Page1 />}></Route>
          <Route path="/page-2" element={<Page2 />}></Route>
          <Route path="/page-3" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
