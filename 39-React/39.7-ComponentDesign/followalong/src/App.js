import './App.css';
import Dice from './DiceGame/Dice';

function App() {
  return (
    <>
      <h1>React App</h1>
      <Dice
        numDice={2}
        title="Monopoly Dice"
      />
      <Dice />
    </>
  );
}

export default App