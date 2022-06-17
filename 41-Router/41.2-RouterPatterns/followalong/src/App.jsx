import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Prodcut1 from "./pages/Prodcut1";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/product" element={<Prodcut1 />} ></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;