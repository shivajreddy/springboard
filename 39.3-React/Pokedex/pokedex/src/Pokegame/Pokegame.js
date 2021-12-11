import '../Pokegame/Pokegame.css'
import Pokedex from '../Pokedex/Pokedex';
import Pokecard from '../Pokecard/Pokecard';

const pokes = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];


// Shuffle an array that outputs the suffled array
const shuffle = (someArray) => {
    for(let i=0; i<someArray.length ; i++)
    {
        const j = Math.floor(Math.random()*someArray.length);
        
        const item_i = someArray[i];
        const item_j = someArray[j];

        someArray[i] = item_j;
        someArray[j] = item_i;
    }
    return(someArray)
}

// Split the array of length8, into two parts
const splitArray = (mainArray) => {
    const finalArray = [[],[]];
        for (let i=0; i<4; ++i)
        {
            finalArray[0].push(mainArray[i]);
        }
        for(let i=4; i <mainArray.length; ++i)
        {
            finalArray[1].push(mainArray[i]);
        }
        return finalArray;
};

// Winning card
const winningCard = (deck1, deck2) => {

    let resultCard;
    let resultText;
    const deck1exp = []
    const deck2exp = []

    for(let i=0; i< deck1.length; ++i)
    {
        deck1exp.push(deck1[i].base_experience)
        deck2exp.push(deck2[i].base_experience)
    }
    const deck1Max = Math.max.apply(Math, deck1exp)
    const deck2Max = Math.max.apply(Math, deck2exp)
    console.log(deck1exp, deck2exp)

    if (deck1Max > deck2Max) {
        const highCard = deck1exp.indexOf(deck1Max)
        resultCard = deck1[highCard]
        resultText = "Player 1 Won"
        // console.log(deck1[highCard])
        // console.log("1 bigger", deck1Max)
    }
    else{
        const highCard = deck2exp.indexOf(deck2Max)
        resultCard = deck2[highCard]
        resultText = "Player 2 Won"
        // console.log(deck2[highCard])
        // console.log("2 bigger", deck2Max)
    }
    // return resultCard
    return resultText
}


const Pokegame = ({}) => {

    const shuffledArray = shuffle(pokes);
    const brokenArray = splitArray(shuffledArray);
    const deck1 = brokenArray[0];
    const deck2 = brokenArray[1];
    console.log("broken 1 ", deck1)
    console.log("broken 2 ", deck2)
    console.log("winning card is = ", winningCard(deck1, deck2));
    // brokenArray[0].map(item=> console.log(item.name, item.id, item.type, item.base_experience))
    return(
        <div className='pokegame'>
            <br></br>
            <div className='deck'>
                <h2 >Player 1</h2>
                <div className="hand1">
                {console.log("this is going as d1",deck1)}
                {/* The deck1 and deck2 are not pasting correct cards */}
                    {deck1.map(pokemon => (
                        <Pokecard
                        name={pokemon.name}
                        type={pokemon.type}
                        img={pokemon.id}
                        be={pokemon.base_experience}/>
                    ))}
                </div>
            </div>
            <br></br>
            <div className="deck">
                <h2 >Player 2</h2>
                <div className="hand2">
                {deck2.map(pokemon => (
                        <Pokecard
                        name={pokemon.name}
                        type={pokemon.type}
                        img={pokemon.id}
                        be={pokemon.base_experience}/>
                    ))}
                </div>
            </div>
            <br></br>
            <h1> Winner is :
            {winningCard(deck1, deck2)}
            </h1>
        </div>
    );
};

export default Pokegame;
