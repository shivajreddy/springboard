import './App.css';
import Pokedex from './Pokedex/Pokedex';
import Pokegame from './Pokegame/Pokegame';
import Footer from './Footer';
// import Pokecard from './Pokecard/Pokecard';


const pokemonList = ["poke1", "poke2", "poke3", "poke4", "poke5", "poke6", "poke7", "poke8"]


function App() {
  return (
      <>
          <h1>PokeGame</h1>
          <Pokedex/>
          {/* <Pokegame pokemonlist={pokemonList} /> */}
            <Footer/>
      </>
  );
}

export default App;
