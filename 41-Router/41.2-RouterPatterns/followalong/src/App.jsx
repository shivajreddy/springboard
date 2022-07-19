import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "components/Nav";
import HomePage from "pages/HomePage";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
