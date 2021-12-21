localStorage.clear()
const gameContainer = document.getElementById("game");
let clicking = true;
let card1 = null;
let card2 = null;

const COLORS = ["red","blue","green","orange","purple","red","blue","green","orange","purple"];

// Shuffle array, inspired from Fisher Yates algorithm
function shuffle (array) {

    for (let i=0; i< array.length; ++i)
    {
        // Picking a random number from the array
        j = Math.floor(Math.random()* array.length)

        item_i = array[i]
        item_j = array [j]
        
        // Swapping item_i with item_j, from array[0] through array[n]
        array[i] = item_j
        array[j] = item_i

        return array
    }
}

let shuffledColors = shuffle(COLORS);

// Create Color div's and add EventListener's
function createDivsForColors(colorArray) {
let count = 1;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // Class attribute for the div
    newDiv.classList.add(color);
    newDiv.setAttribute('data-type','cardbox')
    // Id addtribute for the div
    newDiv.setAttribute('id', count);
    count = count +1 
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

let noClicking = false;
// TODO: Implement this function!
function handleCardClick(event) {

    //* Saving the id and class of selected div to LocalStorage
    localStorage.setItem(event.target.id, event.target.classList[0])

    //* Set a Timer to show the color
    if (clicking == true)
    {
        event.target.style.backgroundColor = event.target.getAttribute('class')
        event.target.classList.add('flipped');
    };


    //* Creating Key,Value for each localStorage item 
    const k1 = localStorage.key(0);
    const v1 = localStorage.getItem(k1);
    const k2 = localStorage.key(1);
    const v2 = localStorage.getItem(k2);


    // * Both Cards are selected
    if (k1 && k2){

        //* Both cards are same color, remove click listener
        if (v1 == v2)
        {
            document.getElementById(k1).removeEventListener('click', handleCardClick);
            document.getElementById(k2).removeEventListener('click', handleCardClick);
        }

        //* Not Same, execute after 500milliseconds, remove flipped, remove background
        else
        {
            setTimeout(function(){

                document.getElementById(k1).style.backgroundColor = ''
                document.getElementById(k2).style.backgroundColor = ''
                document.getElementById(k1).classList.remove('flipped');
                document.getElementById(k2).classList.remove('flipped');

            },350);
        }
    }

    //* Final Check, if there are two items in storage, clear both
    if (localStorage.length == 2)
    {
        localStorage.clear();
    }

}

// when the DOM loads
createDivsForColors(shuffledColors);