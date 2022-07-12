import './App.css';
import Deck from './Deck'

function App() {
  return (
    <div>
      <h1>Card Deck.</h1>
      <div>
        <p>10 card deck</p>
        <Deck maxCards={10} />
      </div>
      <div>
        <p>52 card deck</p>
        <Deck maxCards={52} />
      </div>
    </div>
  );
}

export default App;
