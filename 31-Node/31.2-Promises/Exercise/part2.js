//! Part 2

const newDeckURL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
const $cardDeck = $('.card-deck')
const $drawCard= $('button')


// First time -> New deck, save deck-id in localStorage
let local_deckId = localStorage.getItem('deckId');
if (!local_deckId || local_deckId === ''){
  $.get(`${newDeckURL}`).then(response=>{
    const deckId = response.deck_id;
    localStorage.setItem('deckId', deckId)
    local_deckId = deckId

  })
}


// Draw a card
$drawCard.on('click', ()=>{

  $.get(`https://deckofcardsapi.com/api/deck/${local_deckId}/draw/?count=1`).then(response => {
    const card = response.cards[0];

    // Part 2.1
    console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)

    // Part 2.3
    $cardDeck.append(`<img src='${card.image}' alt=''>`)

    // 0 cards in deck -> make a new deck
    if (response.remaining === 0){
      alert('All cards are drawn, reload page to start a new deck')
      localStorage.clear()
      $drawCard.remove()
    }
  })
})