import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './pages/Home';
import Soda from './pages/Soda';
import Chips from './pages/Chips';
import Chicken from './pages/Chicken';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/soda' element={<Soda />} />
        <Route path='/chips' element={<Chips />} />
        <Route path='/chicken' element={<Chicken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
