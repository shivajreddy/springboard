const baseURL = 'https://pokeapi.co/api/v2'
const $pokeDeck= $('.poke-deck')
const $generateButton = $('button')

$generateButton.on('click', () => {
  console.log('make new poke card')
})

let all_pokemons;

// part 1
$.get(`${baseURL}/pokemon?limit=2000`).then((response)=>{
  // console.log(response.results)
  all_pokemons = response.results;
})


// part 2 -> pick 3 pokemon at random
.then(()=>{
  for (let i=0; i<3; i++){
    const pokemon = all_pokemons[Math.floor( Math.random()*all_pokemons.length )]

    $.get(`${baseURL}/pokemon-species/${pokemon.name}/`).then((response)=>{
      console.log(pokemon)
      console.log(response)

      // fun fact about species
      for (let flvr_txt of response.flavor_text_entries){
        if (flvr_txt.language.name === 'en'){
          console.log(flvr_txt.flavor_text)
          break
        }
      }

    })
    .catch(()=>{
      console.log(`couldn't find species for ${pokemon.name}`)
    })
  }
})
