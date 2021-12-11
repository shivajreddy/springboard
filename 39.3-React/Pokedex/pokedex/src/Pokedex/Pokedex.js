import Pokecard from "../Pokecard/Pokecard"
import Pokegame from "../Pokegame/Pokegame";
import '../Pokedex/Pokedex.css'

const pokes = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]

const pokemonList = ["poke1", "poke2", "poke3", "poke4", "poke5", "poke6", "poke7", "poke8"]


const Pokedex = () => {
    return(
        <>
        <div className="pokedex" >
            {pokes.map(pokemon => (
                    <Pokecard name={pokemon.name} type={pokemon.type} img={pokemon.id} be={pokemon.base_experience}/>

                ))}
        </div>

        {/* This is the actual game component */}
        <Pokegame />
        </>
    );
};

// export {pokes}
export default Pokedex;