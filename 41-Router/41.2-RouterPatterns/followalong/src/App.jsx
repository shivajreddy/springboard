import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Shoe from "./pages/Shoe";
import Sickle from "./pages/Sickle";
import Error404 from "./pages/Error404";


function App() {
  let { id } = useParams();
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/products" element={<Products />} ></Route>
          <Route path="product">
            <Route path="1" element={<Shoe id={id} />} />
            <Route path="2" element={<Sickle />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;