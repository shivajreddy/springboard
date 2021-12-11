const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let count = 1;


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute('id', count);
    count = count +1 

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // newDiv.addEventListener('click',check);
    newDiv.addEventListener('click', simpleArray);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
//   color = (event.target).getAttribute('class');
//   (event.target).style.background = color;


}

// when the DOM loads
createDivsForColors(shuffledColors);

const pair = []
const correctPairs = []

function addColor(e){
    let object = {}
    color = (e.target).getAttribute('class')
    pair.push(color);
    (e.target).style.background = color;
}

function check(event){
    if (pair.length >= 2){
        pair.splice(0,2)
        // console.log(pair)
    }
    else{
        pair.push((event.target).getAttribute('class'))
        color = (event.target).getAttribute('class');
        (event.target).style.background = color;
        console.log(pair)
        // newDiv.addEventListener('click', addColor);

    }
}

function Box(input_box){
    this.class = (input_box.target).getAttribute('class');
    this.id = (input_box.target).getAttribute('id');
}


function simpleArray (event) {
    currentBox = new Box(event)
    boxdetail = (`${(currentBox.class)}, ${currentBox.id}`);

    if (pair.length === 0) {
        pair.push(currentBox);
    }

    if ((pair.length === 1) && (currentBox.id != pair[0].id)){

        if (pair.length >= 2){
            if (pair[0].class === pair[1].class){
                correctPairs.push(pair[0]);
                correctPairs.push(pair[1]);
                console.log(`Correct Pairs ${correctPairs}`);
            }
            else{
                pair.shift()
                pair.shift()
            }
        }
        else if(pair.length == 0 || pair.length < 2){
            pair.push(currentBox)
            // pair.push(boxdetail)
        }

        else if (pair[0] === pair[1]){
            console.log("pass")
        }
        else if(true){
            console.log("fail so removed both")
            pair.shift()
            pair.shift()
        }

    }
    
    console.log(pair)

}