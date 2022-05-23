import './App.css';
import { useState } from 'react';
import light from './images/light.png';
import dark from './images/dark.png';

// import Ball from './Ball';
import messages from './messages';
import EightBall from './EightBall';

// Further study
import ParentBox from './BoxComp/ParentBox';

const allColors = [
  "Aqua",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "Chocolate",
  "DodgerBlue",
  "Lavender",
  "LawnGreen",
  "Peru",
  "Plum",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Yellow",
  "YellowGreen"
]

function App() {
  const [current_theme, setTheme] = useState('light');
  return (
    <div className={current_theme}>
      <button style={{ borderRadius: "50%" }} onClick={() => (current_theme === 'light' ? setTheme('dark') : setTheme('light'))}>
        {(current_theme === 'light' ? <img src={dark} alt='dark-logo' /> : <img src={light} alt='light-logo' />)}
      </button>



      <EightBall answers={messages} />

      <ParentBox
        number={16}
        colors={allColors}
      />

    </div>
  );
}


export default App