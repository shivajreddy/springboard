import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "components/Nav";
import HomePage from "pages/HomePage";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import Error404 from "pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="product">
          <Route path="1" element={<HomePage />} />} />
          <Route path="2" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
