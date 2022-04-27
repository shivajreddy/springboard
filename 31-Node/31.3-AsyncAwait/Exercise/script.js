//! 31.3 -> Async Await

const baseURL = `https://pokeapi.co/api/v2`
const $button = $('button')


async function getNewPokemon() {
  const randomNumber = Math.floor( Math.random()*1000 )
  const {data: pokemon} = await axios.get(`${baseURL}/pokemon/${randomNumber}`)

  // console.log(pokemon)
  const {data: species} = await axios.get(pokemon.species.url)
  console.log(pokemon, species)

  // get a english text entry
  for(let fte of species.flavor_text_entries){
    if (fte.language.name === 'en'){
      console.log(fte.flavor_text)
      break
    }
  }

}


$button.on('click', ()=>{
  getNewPokemon()
})

