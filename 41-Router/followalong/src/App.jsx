import Nav from './Nav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
