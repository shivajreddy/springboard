import './App.css';
import { useState } from 'react';
import light from './images/light.png';
import dark from './images/dark.png';

// import Ball from './Ball';
import messages from './messages';
import EightBall from './EightBall';


function App() {
  const [current_theme, setTheme] = useState('light');
  return (
    <div className={current_theme}>
      <button style={{ borderRadius: "50%" }} onClick={() => (current_theme === 'light' ? setTheme('dark') : setTheme('light'))}>
        {(current_theme === 'light' ? <img src={dark} alt='dark-logo' /> : <img src={light} alt='light-logo' />)}
      </button>

      <h1 style={{ textAlign: "center" }}>Eight Ball</h1>

      {/* <Ball /> */}
      <EightBall
        answers={messages}
      />

    </div>
  );
}


export default App