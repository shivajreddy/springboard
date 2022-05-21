import { useState } from "react";
// import './App.css';
// import Clicker from "./Clicker";
import Time from "./Time";
import Counter from "./Counter";
import NumberGame from "./NumberGame";


function App() {
  const [current_theme, setTheme] = useState('light');
  return (
    <div className={current_theme}>
      <button onClick={() => (current_theme === 'light') ? setTheme('dark') : setTheme('light')}>Theme</button>
      <h2 style={{ textAlign: "center" }}>State</h2>

      <Time />

      <Counter />

      <NumberGame />

    </div >
  );
}

export default App;