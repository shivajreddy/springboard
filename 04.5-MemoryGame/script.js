localStorage.clear()
const gameContainer = document.getElementById("game");

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

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // Not sure if you need another data-color attribute, started for using with local storage
    newDiv.setAttribute('data-color', color);
    newDiv.setAttribute('id', count);
    count = count +1 

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // newDiv.addEventListener('click',check);
    // newDiv.addEventListener('click', simpleArray);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
    const colorClass = event.target.classList[0];

    // console.log(event.target.getAttribute('data-color'))

    localStorage.setItem(event.target.id, colorClass)

    // Making sure only two boxes are clicked at any time. (Not sure if it should be top or botton, based on setInterval)
    if (localStorage.length>2)
    {
        localStorage.clear();
    }

    // Check if the box colors are same
    const k1 = localStorage.key(0);
    const v1 = localStorage.getItem(k1);
    const k2 = localStorage.key(1);
    const v2 = localStorage.getItem(k2);
    console.log(`these are k1 v1=(${k1},${v1}), and k2v2=(${k2},${v2})`);

    // Set a Timer to show the color
    

    // Runcs check only after two boxes are selected.
    if (v1 !== null && v2 !== null)
    {
        const box1 = (document.getElementById(k1));
        const box2 = (document.getElementById(k2));
        if (v1 === v2)
        {
            console.log("these match");
            box1.style.backgroundColor = v1
            box2.style.backgroundColor = v2
        }
        if (v1 !== v2)
        {
            console.log("these don't match");
            box1.removeAttribute('style');
        }
    }
}

// when the DOM loads
createDivsForColors(shuffledColors);


// >>>> OLD CODE <<<<< //
// const pair = []
// const correctPairs = []

// function addColor(e){
//     let object = {}
//     color = (e.target).getAttribute('class')
//     pair.push(color);
//     (e.target).style.background = color;
// }

// function check(event){
//     if (pair.length >= 2){
//         pair.splice(0,2)
//         // console.log(pair)
//     }
//     else{
//         pair.push((event.target).getAttribute('class'))
//         color = (event.target).getAttribute('class');
//         (event.target).style.background = color;
//         console.log(pair)
//         // newDiv.addEventListener('click', addColor);

//     }
// }

// function Box(input_box){
//     this.class = (input_box.target).getAttribute('class');
//     this.id = (input_box.target).getAttribute('id');
// }


// function simpleArray (event) {
//     currentBox = new Box(event)
//     boxdetail = (`${(currentBox.class)}, ${currentBox.id}`);

//     if (pair.length === 0) {
//         pair.push(currentBox);
//     }

//     if ((pair.length === 1) && (currentBox.id != pair[0].id)){

//         if (pair.length >= 2){
//             if (pair[0].class === pair[1].class){
//                 correctPairs.push(pair[0]);
//                 correctPairs.push(pair[1]);
//                 console.log(`Correct Pairs ${correctPairs}`);
//             }
//             else{
//                 pair.shift()
//                 pair.shift()
//             }
//         }
//         else if(pair.length == 0 || pair.length < 2){
//             pair.push(currentBox)
//             // pair.push(boxdetail)
//         }

//         else if (pair[0] === pair[1]){
//             console.log("pass")
//         }
//         else if(true){
//             console.log("fail so removed both")
//             pair.shift()
//             pair.shift()
//         }

//     }
    
//     console.log(pair)

// }